import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MatchingBoard from "./pages/MatchingBoard";
import PostWrite from "./pages/PostWrite";
import App from "./pages/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "matchingBoard",
        element: <MatchingBoard />,
      },
      {
        path: "postwrite",
        element: <PostWrite />,
      },
      {
        path: "test",
        element: <App />,
      },
    ],
  },
]);

export default router;
