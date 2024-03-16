import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ButtonPage } from '../pages/ButtonPage/ButtonPage';
import { InputPage } from '../pages/InputPage/InputPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/button',
                element: <ButtonPage />,
            },
            {
                path: '/input',
                element: <InputPage />,
            },
        ],
    },
]);
