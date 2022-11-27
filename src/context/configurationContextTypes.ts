import TranslatorAdapter from '@adapters/TranslatorAdapter';
import IGetDataInterface from '@domain/usecases/interfaces/IGetDataInterface';

export interface ConfigContextValueType {
    translatorAdapter: TranslatorAdapter;
    iGetData: IGetDataInterface;
    env: {
        API_URL: string;
    }
}
