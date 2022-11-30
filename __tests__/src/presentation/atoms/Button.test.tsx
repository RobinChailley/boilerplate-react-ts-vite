import { ConfigContext } from '@context/ConfigurationContext';
import Button from '@presentation/atoms/Button';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../../mocks/context/getConfigurationContextValue';

describe('Button', () => {
    it('should render correctly', async () => {
        let render = renderer.create(
            <ConfigContext.Provider value={getConfigContextValue()}>
                <Button text={''} onClick={jest.fn()}/>
            </ConfigContext.Provider>,
        );

        const snapshot = render!.toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
