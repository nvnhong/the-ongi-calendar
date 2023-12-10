import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import VStack from "@components/common/VStack";
import TextBox from "@components/common/TextBox";
import List from "@components/common/List";
import { useQueries } from "@tanstack/react-query";
import { getUserInfo, getUserPost, logout } from "@api/userApi";
import { Button } from "@mui/material";
import Loading from "@components/common/Loading";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();
  const quries = useQueries({
    queries: [
      { queryKey: ["user"], queryFn: getUserInfo },
      { queryKey: ["userPost"], queryFn: getUserPost },
    ],
  });

  const [userInfoQuery, userPostQuery] = quries;
  const userInfo = userInfoQuery.data;
  const userPost = userPostQuery.data;
  const isLoading = quries.some((query) => query.isLoading);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Layout>
      <Header />

      <VStack className="justify-center items-center gap-2 py-4">
        <TextBox className="flex justify-center items-center text-[18px] font-semibold">{`${userInfo.username}(${userInfo.phoneNum})`}</TextBox>
        <Button variant="outlined" className="h-[26px]" onClick={logout}>
          로그아웃
        </Button>
      </VStack>

      <TextBox className="py-3 flex justify-center items-center font-semibold bg-gray-100 my-1">
        {`작성한 소망 갯수 ${userPost.length} / 5개`}
      </TextBox>

      <VStack className="mx-1">
        {userPost.map((data) => (
          <List
            key={data.id}
            value={data}
            onListClick={() => navigate(`/post/${data.id}`, { state: data })}
          />
        ))}
      </VStack>
    </Layout>
  );
}
