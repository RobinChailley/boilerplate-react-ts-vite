import { ConfigContext, useConfig } from '@context/ConfigurationContext';
import getConfigContextValue from '@context/getConfigurationContextValue';
import router from '@navigation/Router';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

interface AppProps {}

const AppConfig: React.FC = () => {
  const { translatorAdapter } = useConfig();
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    (async () => {
      await translatorAdapter.setup();
      setIsReady(true);
    })();
  }, [translatorAdapter]);

  if (!isReady) {
    return null;
  }
  return <RouterProvider router={router} />;
};

const App: React.FC<AppProps> = () => {
  return (
    <ConfigContext.Provider value={getConfigContextValue()}>
      <AppConfig />
    </ConfigContext.Provider>
  );
};

export default App;
