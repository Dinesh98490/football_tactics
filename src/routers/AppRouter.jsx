import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import NotFound from '../Pages/NotFoundPage';
import LandingPage from '../Pages/LandingPage';




export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <LandingPage /> },
        

        
        ],

    },
 
]);


