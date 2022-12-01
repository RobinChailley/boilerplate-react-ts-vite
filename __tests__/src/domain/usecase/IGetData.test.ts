import IGetData from '@domain/usecases/IGetData';

import BaseHttpAdapter from '../../../mocks/adapters/BaseHttpAdapter';

describe('IGetData', () => {
  it('should returns an error not implemented', async () => {
    const baseHttpAdapter = new BaseHttpAdapter();
    const iGetData = new IGetData(baseHttpAdapter);
    const response = await iGetData.execute('uuid');
    expect(response).toBeInstanceOf(Error);
  });
});
