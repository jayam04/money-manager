import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";

import Home from "./containers/Home/HomePage";
// import About from "./pages/About";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/LoginPage";
import Navigation from "./src/components/shared/newNavigation/Navigation";
import error404 from "./error-404";
import "./App.sass"

function AppLayout() {
  return(
    <div className="app">
      <div className="app-nav_menu">
      <h2 className="app-nav_menu-title"><img src="./favicon.ico"></img>monymngr</h2>

      <Navigation />
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
          errorElement: error404()
        },
        
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App;