// src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
