import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardUserList from './pages/Dashboard/DashboardPages/DashboardUserList/DashboardUserList.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

import Login from "./pages/Login/Login.jsx";
import Map from "./pages/Map/Map.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashboardSettings from "./pages/Dashboard/DashboardPages/DashboardSettings/DashboardSettings.jsx";
import DashboardCityList from './pages/Dashboard/DashboardPages/DashboardCityList/DashboardCityList.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/map",
                element: <Map />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                index: true,
                element: <DashboardSettings />
            },
            {
                path: "userList",
                element: <DashboardUserList />
            },
            {
                path: "cityList",
                element: <DashboardCityList />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
