import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Users from './Components/Users';
import AddManager from './Components/Managers/AddManager';
import Managers from './Components/Managers/Managers';
import UpdateManager from './Components/Managers/UpdateManager';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('https://coffee-store-server-n715s62ht-omarjafor.vercel.app/coffee')
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-n715s62ht-omarjafor.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-n715s62ht-omarjafor.vercel.app/user')
  },
  {
    path: '/addmanager',
    element: <AddManager></AddManager>
  },
  {
    path: '/managers',
    element: <Managers></Managers>,
    loader: () => fetch('https://coffee-store-server-n715s62ht-omarjafor.vercel.app/managers')
  },
  {
    path: '/updatemanager/:id',
    element: <UpdateManager></UpdateManager>,
    loader: ({ params }) => fetch(`https://coffee-store-server-n715s62ht-omarjafor.vercel.app/managers/${params.id}`)

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
