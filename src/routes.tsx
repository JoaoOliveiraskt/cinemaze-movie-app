import {  createBrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import Watch from "./pages/watch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div className="h-screen flex items-center justify-center">404 Not Found</div>
  },
  {
    path: "watch",
    element: <Watch />,
  },
]);



