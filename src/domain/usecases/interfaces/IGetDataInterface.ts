import Data from '@domain/entities/Data';

interface IGetDataInterface {
    execute(uuid: string): Promise<Data | Error>;
}

export default IGetDataInterface;
