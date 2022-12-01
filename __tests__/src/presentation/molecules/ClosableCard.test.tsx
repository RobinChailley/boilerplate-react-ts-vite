import { ConfigContext } from '@context/ConfigurationContext';
import ClosableCard from '@presentation/molecules/ClosableCard';
import renderer from 'react-test-renderer';

import getConfigContextValue from '../../../mocks/context/getConfigurationContextValue';

describe('ClosableCard', () => {
  it('should render correctly', async () => {
    let render = renderer.create(
      <ConfigContext.Provider value={getConfigContextValue()}>
        <ClosableCard text={''} badgeText={''} ctaHref={''} ctaText={''} id={''} />
      </ConfigContext.Provider>,
    );

    const snapshot = render!.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
