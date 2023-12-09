import { createBrowserRouter } from "react-router-dom";
import MonthPage from "@pages/MonthPage";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "month/:monthId",
    element: <MonthPage />,
  },
  { path: "login", element: <LoginPage /> },
]);
