import { ConfigContext } from '@context/ConfigurationContext';
import Badge from '@presentation/atoms/Badge';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../../mocks/context/getConfigurationContextValue';

describe('Badge', () => {
  it('should render correctly', async () => {
    let render = renderer.create(
      <ConfigContext.Provider value={getConfigContextValue()}>
        <Badge text={''} />
      </ConfigContext.Provider>,
    );

    const snapshot = render!.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
