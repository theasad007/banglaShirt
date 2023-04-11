import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import ReviewOrder from './Components/Review-Order/ReviewOrder';
import NotFound404 from './Components/NotFound404/NotFound404';
import Grandpa from './Components/Grandpa/Grandpa';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/tshirts.json')
      },
      {
        path:'review',
        element: <ReviewOrder></ReviewOrder>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path: '*',
        element: <NotFound404></NotFound404>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
