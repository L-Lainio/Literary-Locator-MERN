import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <SearchBooks />
            }, {
                path: '/saved',
                element: <SavedBooks />
            }
        ]
    }
]);
