import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Principal } from "./pages/Principal";
import { WorksPage } from "./pages/workspage.jsx";

import "./index.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Principal />,
      },
      {
        path: "projects",
        element: <WorksPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
