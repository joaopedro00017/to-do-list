import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"; // novo import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // tratamento de erro
  },
  {
    path: "/task",
    element: <TaskPage />,
    errorElement: <ErrorPage />, // tratamento de erro
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
