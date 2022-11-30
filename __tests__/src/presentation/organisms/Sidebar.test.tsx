import { ConfigContext } from '@context/ConfigurationContext';
import Sidebar from '@presentation/organisms/Sidebar';
import renderer, { act } from 'react-test-renderer';

import getConfigContextValue from '../../../mocks/context/getConfigurationContextValue';

describe('Sidebar', () => {
    it('should render correctly', () => {
        let render = renderer.create(
            <ConfigContext.Provider value={getConfigContextValue()}>
                <Sidebar items={[{ alt: '', icon: '', title: '', to: '' }]}/>
            </ConfigContext.Provider>,
        );

        const snapshot = render!.toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('should execute onPress', () => {
        const config = getConfigContextValue();
        config.iLogout.execute = jest.fn();

        let render = renderer.create(
            <ConfigContext.Provider value={config}>
                <Sidebar items={[{ alt: '', icon: '', title: '', to: '' }]}/>
            </ConfigContext.Provider>,
        );

        const instance = render!.root;
        const button = instance.findByProps({ text: 'sidebar.logout' });

        act(() => {
            button.props.onClick();
        });

        expect(config.iLogout.execute).toHaveBeenCalledWith();
    });
});
