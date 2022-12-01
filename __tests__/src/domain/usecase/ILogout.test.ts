import ILogout from '@domain/usecases/ILogout';

describe('ILogout', () => {
  it('should logout', () => {
    const iLogout = new ILogout();
    expect(iLogout.execute()).not.toBeInstanceOf(Error);
  });
});
