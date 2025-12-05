import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import KanbanPage from "./pages/KanbanPage";
import ListViewPage from "./pages/ListViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/kanban" /> },
      { path: "kanban", element: <KanbanPage /> },
      { path: "list", element: <ListViewPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
