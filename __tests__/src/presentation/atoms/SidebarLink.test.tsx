import { ConfigContext } from '@context/ConfigurationContext';
import SidebarLink from '@presentation/atoms/SidebarLink';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../../mocks/context/getConfigurationContextValue';

describe('SidebarLink', () => {
  it('should render correctly', async () => {
    let render = renderer.create(
      <ConfigContext.Provider value={getConfigContextValue()}>
        <SidebarLink alt={''} icon={''} title={''} to={''} />
      </ConfigContext.Provider>,
    );

    const snapshot = render!.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
