import IGetDataInterface from '@domain/usecases/interfaces/IGetDataInterface';

class IGetData implements IGetDataInterface {
    async execute(): Promise<any> {
        return {};
    }
}

export default IGetData;
