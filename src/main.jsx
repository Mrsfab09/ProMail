import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Register } from "./views/Register/Register.jsx";
import { Dashboard } from "./views/Dashboard/Dashboard.jsx";
import { Login } from "./views/Login/Login.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
