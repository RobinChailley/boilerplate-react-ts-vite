import router from '@navigation/Router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
