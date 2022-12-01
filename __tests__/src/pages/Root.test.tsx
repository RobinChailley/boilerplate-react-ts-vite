import { ConfigContext } from '@context/ConfigurationContext';
import Root from '@pages/Root';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../mocks/context/getConfigurationContextValue';

describe('Root', () => {
  it('should render correctly', () => {
    const render = renderer.create(
      <ConfigContext.Provider value={getConfigContextValue()}>
        <Root />
      </ConfigContext.Provider>,
    );

    const snapshot = render!.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
