import BaseHttpAdapter from '@adapters/BaseHttpAdapter';
import TranslatorAdapter from '@adapters/TranslatorAdapter';
import { ConfigContextValueType } from '@context/configurationContextTypes';
import IGetData from '@domain/usecases/IGetData';

const getConfigContextValue = (): ConfigContextValueType => {
    const translatorAdapter = new TranslatorAdapter();
    const baseHttpAdapter = new BaseHttpAdapter(import.meta.env.API_URL || '');

    const iGetData = new IGetData(baseHttpAdapter);

    console.log(import.meta.env.VITE_API_URL);

    return {
        iGetData,
        translatorAdapter,
        env: {
            API_URL: import.meta.env.API_URL || '',
        },
    };
};

export default getConfigContextValue;
