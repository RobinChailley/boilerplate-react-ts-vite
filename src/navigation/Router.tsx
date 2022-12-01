import Error from '@pages/Error';
import Home from '@pages/Home';
import Root from '@pages/Root';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
