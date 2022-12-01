import ILogoutInterface from '@domain/usecases/interfaces/ILogoutInterface';

class ILogout implements ILogoutInterface {
  async execute(): Promise<Error | void> {
    console.log('logout');
    return;
  }
}

export default ILogout;
