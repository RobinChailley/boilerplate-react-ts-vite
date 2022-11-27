import BaseHttpAdapter from '@adapters/BaseHttpAdapter';
import TranslatorAdapter from '@adapters/TranslatorAdapter';
import { ConfigContextValueType } from '@context/configurationContextTypes';
import IGetData from '@domain/usecases/IGetData';

const getConfigContextValue = (): ConfigContextValueType => {
    const translatorAdapter = new TranslatorAdapter();
    const baseHttpAdapter = new BaseHttpAdapter();

    const iGetData = new IGetData(baseHttpAdapter);

    return {
        iGetData,
        translatorAdapter,
    };
};

export default getConfigContextValue;
