import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MatchingBoard from "./page/MatchingBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MatchingBoard />,
      },
    ],
  },
]);

export default router;
