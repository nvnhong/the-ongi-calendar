import { createBrowserRouter } from "react-router-dom";
import MonthPage from "@pages/MonthPage";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import PostPage from "@pages/PostPage";
import MyPage from "@pages/MyPage";
import ImageUplaodPage from "@pages/ImageUploadPage";
import AdminPage from "@pages/AdminPage";
import AdminInfoPage from "@pages/AdminInfoPage";
import AdminDetailPage from "@pages/AdminDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "month/:monthId",
    element: <MonthPage />,
  },
  // { path: "login", element: <LoginPage /> },
  { path: "post", element: <PostPage /> },
  { path: "post/:postId", element: <PostPage /> },
  { path: "photo", element: <ImageUplaodPage /> },
  { path: "mypage", element: <MyPage /> },
  {
    path: "admin",
    element: <AdminPage />,
    children: [
      { path: "/admin/info", element: <AdminInfoPage /> },
      { path: "/admin/detail", element: <AdminDetailPage /> },
    ],
  },
]);
