import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import AddSpots from './components/Pages/AddSpots';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import UpdateTouristSpot from './components/Pages/UpdateTouristSpot';
import AuthProvider from './providers/AuthProvider';
import AllSpots from './components/Pages/AllSpots';
import SpotDetails from './components/Pages/SpotDetails';
import PrivetRoutes from './routes/PrivetRoutes';
import MyList from './components/Pages/MyList';
import BangladeshSpots from './components/Pages/CountrySpot/BangladeshSpots';
import ThailandSpots from './components/Pages/CountrySpot/ThailandSpots';
import IndonesiaSpots from './components/Pages/CountrySpot/IndonesiaSpots';
import MalaysiaSpots from './components/Pages/CountrySpot/MalaysiaSpots';
import VietnamSpots from './components/Pages/CountrySpot/VietnamSpots';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tour-mentor-server-lime.vercel.app/spot'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addSpots',
        element: <PrivetRoutes><AddSpots></AddSpots></PrivetRoutes>
      },
      {
        path: '/allSpots',
        element: <PrivetRoutes><AllSpots></AllSpots></PrivetRoutes>,
        loader: () => fetch('https://tour-mentor-server-lime.vercel.app/spot'),
      },
      {
        path: '/updateSpots/:id',
        element: <UpdateTouristSpot></UpdateTouristSpot>,
        loader: ({ params }) => fetch(`https://tour-mentor-server-lime.vercel.app/spot/${params.id}`)
      },
      {
        path: '/spotDetails/:id',
        element:<PrivetRoutes><SpotDetails></SpotDetails></PrivetRoutes>,
        loader: ({ params }) => fetch(`https://tour-mentor-server-lime.vercel.app/spot/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivetRoutes><MyList></MyList></PrivetRoutes>,
        loader: () => fetch('https://tour-mentor-server-lime.vercel.app/spot')
      },
      {
        path: '/bangladesh',
        element: <PrivetRoutes><BangladeshSpots></BangladeshSpots></PrivetRoutes>,
      },
      {
        path: '/thailand',
        element: <PrivetRoutes><ThailandSpots></ThailandSpots></PrivetRoutes>,
      },
      {
        path: '/malaysia',
        element: <PrivetRoutes><MalaysiaSpots></MalaysiaSpots></PrivetRoutes>,
      },
      {
        path: '/indonesia',
        element: <PrivetRoutes><IndonesiaSpots></IndonesiaSpots></PrivetRoutes>,
      },
      {
        path: '/vietnam',
        element: <PrivetRoutes><VietnamSpots></VietnamSpots></PrivetRoutes>,
      },
      {
        path: '/cambodia',
        element: <PrivetRoutes></PrivetRoutes>,
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
