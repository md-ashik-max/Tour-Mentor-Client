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
        element: <AddSpots></AddSpots>
      },
      {
        path: '/allSpots',
        element: <AllSpots></AllSpots>,
        loader: () => fetch('http://localhost:5000/spot'),
      },
      {
        path: '/updateSpots',
        element: <UpdateTouristSpot></UpdateTouristSpot>
      },
      {
        path: '/spotDetails/:id',
        element:<SpotDetails></SpotDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/spot/${params.id}`)
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
