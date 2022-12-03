import BaseHttpAdapter from '@adapters/BaseHttpAdapter';
import TranslatorAdapter from '@adapters/TranslatorAdapter';
import { ConfigContextValueType } from '@context/configurationContextTypes';
import IGetData from '@domain/usecases/IGetData';
import ILogout from '@domain/usecases/ILogout';

const getConfigContextValue = (): ConfigContextValueType => {
  const translatorAdapter = new TranslatorAdapter();
  const baseHttpAdapter = new BaseHttpAdapter(process.env.VITE_API_URL || '');

  const iGetData = new IGetData(baseHttpAdapter);
  const iLogout = new ILogout();

  return {
    env: {
      API_URL: process.env.VITE_API_URL || '',
    },
    iGetData,
    iLogout,
    translatorAdapter,
  };
};

export default getConfigContextValue;
