import { createBrowserRouter } from "react-router-dom";
import MonthPage from "@pages/MonthPage";
import MainPage from "@pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "month/:monthId",
    element: <MonthPage />,
  },
]);
