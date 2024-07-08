import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Register } from "./components/Register/Register.jsx";
import { Home } from "./views/Home/Home.jsx";

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
    element: <Home />,
    path: "/home",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
