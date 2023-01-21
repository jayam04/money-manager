import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./containers/Home/HomePage";
// import About from "./pages/About";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/LoginPage";


function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "auth",
          element: <Login />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App;