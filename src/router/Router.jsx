import { createBrowserRouter } from "react-router-dom";
import MonthPage from "@pages/MonthPage";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import PostPage from "@pages/PostPage";
import MyPage from "@pages/MyPage";
import ImageUplaodPage from "@pages/ImageUploadPage";

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
  { path: "post", element: <PostPage /> },
  { path: "post/:postId", element: <PostPage /> },
  { path: "photo/:monthId", element: <ImageUplaodPage /> },
  { path: "mypage", element: <MyPage /> },
]);
