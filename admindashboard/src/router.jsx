import {createBrowserRouter} from 'react-router-dom';
import Login from './features/identity/components/login';
import Register from './features/identity/components/register';
import IdentityLayout from './layouts/identity-layout';
import { Children } from 'react';

const router = createBrowserRouter([
    {
    element:<IdentityLayout/>,
    children:[
            {
        path:'login',
        element:<Login/>
    },
     {
        path:'register',
        element:<Register/>,
        errorElement:<Register/>
        // action:registerAction
    },
    ]
    }
])

export default router;