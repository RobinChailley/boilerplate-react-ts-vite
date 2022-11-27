import { ConfigContextValueType } from '@context/configurationContextTypes';
import getConfigContextValue from '@context/getConfigurationContextValue';
import { createContext, useContext } from 'react';

export const ConfigContext = createContext<ConfigContextValueType>(getConfigContextValue());

export const useConfig = () => useContext(ConfigContext);
