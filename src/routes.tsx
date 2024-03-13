import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Watch from "./pages/watch";
import PageNotFound from "./pageNotFound";
import Search from "./pages/search";


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
    path: "search",
    element: <Search/>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

