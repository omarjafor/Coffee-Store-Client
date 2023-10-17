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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('https://coffee-store-server-3yjy0edit-omarjafor.vercel.app/coffee')
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-3yjy0edit-omarjafor.vercel.app/coffee/${params.id}`)
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
    loader: () => fetch('https://coffee-store-server-3yjy0edit-omarjafor.vercel.app/user')
  },
  {
    path: '/addmanager',
    element: <AddManager></AddManager>
  },
  {
    path: '/managers',
    element: <Managers></Managers>,
    loader: () => fetch('http://localhost:5000/managers')
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
