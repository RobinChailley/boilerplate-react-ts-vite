import BaseHttpAdapterInterface from '@adapters/interfaces/BaseHttpAdapterInterface';
import Data from '@domain/entities/Data';
import IGetDataInterface from '@domain/usecases/interfaces/IGetDataInterface';

class IGetData implements IGetDataInterface {
  baseHttpAdapter: BaseHttpAdapterInterface;

  constructor(baseHttpAdapter: BaseHttpAdapterInterface) {
    this.baseHttpAdapter = baseHttpAdapter;
  }

  async execute(uuid: string): Promise<Data | Error> {
    // try {
    //     const { parsedBody }: HttpResponse<any> = await this.baseHttpAdapter.get('data/' + uuid);
    //
    //     if (!parsedBody.data) {
    //         return new Error('global.errors.unexpected');
    //     }
    //
    //     return parsedBody.data;
    // } catch (error: any) {
    //     console.error(error);
    //
    //     return new Error('global.errors.unexpected');
    // }

    return new Error('Method not implemented.');
  }
}

export default IGetData;
