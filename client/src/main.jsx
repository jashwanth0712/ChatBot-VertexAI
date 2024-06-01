import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import { BrowserRouter,Route,Routes } from 'react-router-dom'
=======
>>>>>>> 924d9e0df2f8c0deb90c83cd95b7413a0d12cece
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EmailList } from './test.jsx';
import  DashboardPage  from './Admin/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/emails",
    element:<EmailList/>,
  },
  {
    path:"/dashboard",
    element:<DashboardPage/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
