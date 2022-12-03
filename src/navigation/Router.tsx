import Error from '@pages/Error';
import Home from '@pages/Home';
import Root from '@pages/Root';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '',
      },
    ],
    element: <Root />,
    errorElement: <Error />,
    path: '/',
  },
]);

export default router;
