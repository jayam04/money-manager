import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./containers/Home/HomePage";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";


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
          element: <div>Dashboard</div>,
        },
        {
          path: "auth",
          element: <div>Auth</div>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App;