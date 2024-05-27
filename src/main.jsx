import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routeConfig';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
