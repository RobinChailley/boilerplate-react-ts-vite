import { ConfigContext } from '@context/ConfigurationContext';
import Error from '@pages/Error';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../mocks/context/getConfigurationContextValue';

describe('Error', () => {
  it('should render correctly', () => {
    const render = renderer.create(
      <ConfigContext.Provider value={getConfigContextValue()}>
        <Error />
      </ConfigContext.Provider>,
    );

    const snapshot = render!.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
