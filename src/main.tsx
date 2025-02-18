import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import "./index.css";
import Home from "./routes/Home.tsx";
import BoardOfDirectors from "./routes/BoardOfDirectors.tsx";
import Supporters from "./components/Supporters.tsx";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: () => <Root /> });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createRouter({
        routeTree: rootRoute.addChildren([
          createRoute({ getParentRoute: () => rootRoute, path: "/", component: () => <Home /> }),
          createRoute({ getParentRoute: () => rootRoute, path: "/supporters", component: () => <Supporters /> }),
          createRoute({ getParentRoute: () => rootRoute, path: "/services", component: () => <h1>Services</h1> }),
          createRoute({ getParentRoute: () => rootRoute, path: "/news", component: () => <h1>In the News</h1> }),
          createRoute({ getParentRoute: () => rootRoute, path: "/bod", component: () => <BoardOfDirectors /> }),
        ]),
      })}
    />
  </React.StrictMode>,
);
