import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Drive from "./pages/Drive";
import Rent from './pages/Rent'
import Subscription from './pages/Subscription'
import Status from "./pages/Status";
import Options from "./pages/options";
import DriverLogin from "./pages/DriverLogin";
const Layout = () => { 
  
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/drive",
        element: <Drive />,
      },
      {
        path: "/rent",
        element: <Rent />,
      },
      {
        path: "/subscription", 
        element: <Subscription />,
      },
      {
        path: "/status",
        element: <Status />
      },
      {
        path: "/options",
        element: <Options />
      },
      {
        path: "/DriverLogin",
        element: <DriverLogin />
      },

    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
