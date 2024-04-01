import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/home";
import { Auth } from "../pages/auth";
import { Browse } from "../pages/browse";
import { Profile } from "../pages/profile";
import { GptSearch } from "../pages/gptSearch";

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
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/gpt-search",
      element: <GptSearch />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Router;
