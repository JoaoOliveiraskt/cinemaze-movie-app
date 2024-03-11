import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Watch from "./pages/watch";
import PageNotFound from "./pageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "watch/:id",
    element: <Watch />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

