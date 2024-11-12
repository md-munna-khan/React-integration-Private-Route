import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root.jsx';
import Home from './assets/Components/Home.jsx';
import Login from './assets/Components/Login.jsx';
import Register from './assets/Components/Register.jsx';
import AuthProviders from './assets/Components/Providers/AuthProviders.jsx';
import Orders from './assets/Components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './assets/Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path: 'orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: 'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProviders>
<RouterProvider router={router} />
</AuthProviders>
  </StrictMode>,
)
