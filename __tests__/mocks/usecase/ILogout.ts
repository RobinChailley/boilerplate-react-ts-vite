import ILogoutInterface from '@domain/usecases/interfaces/ILogoutInterface';

class ILogout implements ILogoutInterface {
    async execute(): Promise<Error | void> {
        return;
    }
}

export default ILogout;
