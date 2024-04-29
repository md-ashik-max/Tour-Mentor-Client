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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot'),
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
        loader: () => fetch('http://localhost:5000/spot'),
      },
      {
        path: '/updateSpots',
        element: <UpdateTouristSpot></UpdateTouristSpot>
      },
      {
        path: '/spotDetails/:id',
        element:<PrivetRoutes><SpotDetails></SpotDetails></PrivetRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivetRoutes><MyList></MyList></PrivetRoutes>,
        loader: () => fetch('http://localhost:5000/spot')
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
