import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";

function Body() {
  const appRouter = createBrowserRouter([
    { path: "/", 
    element: <Home /> 
  },
    {
      path: "/browse",

      element:<PrivateRoute element={Browse}/>
    },
    { path: "/login", 
      element: <Login /> 
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
