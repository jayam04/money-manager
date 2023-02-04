import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";

import Home from "./containers/home/HomePage";
import Dashboard from "./containers/dashboard/Dashboard";
import Login from "./containers/login/LoginPage";
import NavigationMenu from "./components/shared/navigation_menu/NavigationMenu";
import Error404 from "./containers/error/Error404";
import "./App.sass"

function AppLayout() {
  return(
    <div className="app">
      <div className="app-nav_menu">
      <h2 className="app-nav_menu-title"><img src="./favicon.ico"></img>monymngr</h2>
      <NavigationMenu />
      </div>

      <div className="app-outlet">
      <Outlet className="app_outlet" />
      </div>
    </div>
  )
}


function App() {
    const router = createBrowserRouter([
        {
          element: <AppLayout />,
          children: [
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
              element: <Dashboard />,
            },
            {
              path: "oa",
              element: <Login />,
            },
          ],
          errorElement: <Error404 />
        },
        
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App;