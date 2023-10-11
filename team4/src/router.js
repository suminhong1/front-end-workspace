import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MatchingBoard from "./page/MatchingBoard";
import PostWrite from "./page/PostWrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MatchingBoard />,
      },
      {
        path: "postwrite",
        element: <PostWrite />,
      },
    ],
  },
]);

export default router;
