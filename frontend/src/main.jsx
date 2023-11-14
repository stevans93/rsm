import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                path: "/",
                element: <Login />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
