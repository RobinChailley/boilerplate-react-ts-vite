import { ConfigContext } from '@context/ConfigurationContext';
import getConfigContextValue from '@context/getConfigurationContextValue';
import router from '@navigation/Router';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
    const config = getConfigContextValue();

    useEffect(() => {
        config.translatorAdapter.setup();
    }, [config.translatorAdapter]);

    return (
        <ConfigContext.Provider value={config}>
            <RouterProvider router={router}/>
        </ConfigContext.Provider>
    );
};

export default App;
