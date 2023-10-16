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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
    loader: () => fetch('http://localhost:5000/user')
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
