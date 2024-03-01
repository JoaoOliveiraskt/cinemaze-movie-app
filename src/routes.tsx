import {  createBrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import Watch from "./pages/watch";
import PageNotFound from "./pages/pageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "watch",
    element: <Watch />,
  },
]);



