import Data from '@domain/entities/Data';

describe('Data', () => {
  it('constructor', () => {
    expect.assertions(3);

    const data = new Data({
      uuid: 'uuid',
      name: 'name',
      description: 'description',
    });

    expect(data.uuid).toStrictEqual('uuid');
    expect(data.name).toStrictEqual('name');
    expect(data.description).toStrictEqual('description');
  });
});
