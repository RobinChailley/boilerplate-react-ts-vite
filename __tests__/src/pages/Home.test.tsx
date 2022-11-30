import { ConfigContext } from '@context/ConfigurationContext';
import Home from '@pages/Home';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../mocks/context/getConfigurationContextValue';

describe('Home', () => {
    it('should render correctly', () => {
        const render = renderer.create(
            <ConfigContext.Provider value={getConfigContextValue()}>
                <Home/>
            </ConfigContext.Provider>,
        );

        const snapshot = render!.toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
