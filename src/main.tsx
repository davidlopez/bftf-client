import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import BoardOfDirectors from "./routes/BoardOfDirectors.tsx";
import Supporters from "./components/Supporters.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supporters",
        element: <Supporters />,
      },
      {
        path: "/services",
        element: <h1>Services</h1>,
      },
      {
        path: "/news",
        element: <h1>In the News</h1>,
      },
      {
        path: "/bod",
        element: <BoardOfDirectors />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
