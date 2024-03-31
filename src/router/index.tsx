import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/Home";
import { Auth } from "../pages/Auth";
import { Browse } from "../pages/Browse";

function Router() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/:authType",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Router;
