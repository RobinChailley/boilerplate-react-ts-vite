import TranslatorAdapterInterface from '@adapters/interfaces/TranslatorAdapterInterface';
import IGetDataInterface from '@domain/usecases/interfaces/IGetDataInterface';
import ILogoutInterface from '@domain/usecases/interfaces/ILogoutInterface';

export interface ConfigContextValueType {
  translatorAdapter: TranslatorAdapterInterface;
  iGetData: IGetDataInterface;
  iLogout: ILogoutInterface;
  env: {
    API_URL: string;
  };
}
