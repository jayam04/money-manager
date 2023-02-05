import React from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./containers/home/HomePage";
import DashboardV1 from "./containers/dashboard/Dashboard";
import Login from "./containers/login/LoginPage";
import NavigationMenu from "./components/navigation-menu/NavigationMenu";
import Error404 from "./containers/error/Error404";
import Dashboard from "./containers/dashboard/v2/Dashboard";
import "./App.sass";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
    {
        path: "od",
        element: <DashboardV1 />,
    },
    {
        path: "oa",
        element: <Login />,
    },
    {
        path: "dashboard",
        element: <Dashboard />
    }
]


function AppLayout() {
    return (
        <div className="app">
            <div className="app-nav_menu">
                <h2 className="app-nav_menu-title">
                    <img src="./favicon.ico"></img>monymngr
                </h2>
                <NavigationMenu />
            </div>

            <div className="app-outlet">
                <Outlet />
            </div>
        </div>
    );
}


function App() {
    const router = createBrowserRouter([
        {

            element: <AppLayout />,
            children: routes,
            errorElement: <Error404 />,
        },
        
    ]);

    return <RouterProvider router={router} />;
}


export default App;
