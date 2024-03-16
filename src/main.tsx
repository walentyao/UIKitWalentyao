import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
document.documentElement.setAttribute('data-theme', 'dark');
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
