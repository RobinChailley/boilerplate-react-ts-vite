import { ConfigContextValueType } from '@context/configurationContextTypes';

import TranslatorAdapter from '../adapters/TranslatorAdapter';
import IGetData from '../usecase/IGetData';
import ILogout from '../usecase/ILogout';

const getConfigContextValue = (): ConfigContextValueType => {
    const translatorAdapter = new TranslatorAdapter();

    const iGetData = new IGetData();
    const iLogout = new ILogout();

    return {
        iGetData,
        iLogout,
        translatorAdapter,
        env: {
            API_URL: '',
        },
    };
};

export default getConfigContextValue;
