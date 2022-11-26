import About from '@pages/About';
import Error from '@pages/Error';
import Home from '@pages/Home';
import Root from '@pages/Root';
import Team from '@pages/Team';
import React from 'react';
import {
    createBrowserRouter,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [{
            path: '',
            element: <Home/>,
        }, {
            path: 'team',
            element: <Team/>,
        }, {
            path: 'about',
            element: <About/>,
        }],
    },
]);

export default router;
