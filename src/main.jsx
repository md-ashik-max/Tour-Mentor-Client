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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/addSpots',
        element:<AddSpots></AddSpots>
      },
      {
        path: '/updateSpots',
        element:<UpdateTouristSpot></UpdateTouristSpot>
      },
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
