import Layout from "@components/common/Layout";
import VStack from "@components/common/VStack";
import TextBox from "@components/common/TextBox";
import { getMonthAndDay } from "@utils/dateUtil";
import useInput from "@hooks/useInput";
import usePostUpload from "@hooks/usePostUpload";
import usePostUpdate from "@hooks/usePostUpdate";
import usePostDelete from "@hooks/usePostDelete";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PostPage() {
  const navigate = useNavigate();
  const { state: postData } = useLocation();

  const { values, setValues, handleChange } = useInput({
    nickname: "",
    month: "",
    day: "",
    contents: "",
  });

  useEffect(() => {
    if (postData) {
      const { nickname, contents, month, day } = postData;
      setValues({ nickname, contents, month, day });
    }
  }, [postData]);

  const postUploadMutation = usePostUpload(values);
  const postUpdateMutation = postData?.id
    ? usePostUpdate(postData.id, values)
    : null;
  const postDeleteMutation = postData?.id ? usePostDelete(postData.id) : null;

  return (
    <Layout>
      <VStack className="h-screen gap-5 px-4 justify-center">
        <TextBox className="text-[20px] text-center font-bold">
          {postData ? "소망 수정하기" : "소망 작성하기"}
        </TextBox>

        <VStack>
          <TextField
            helperText={`닉네임은 10자 이내로 작성해주세요. (${values.nickname.length}/10자)`}
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            label="닉네임"
          />
          <TextBox className="font-normal text-[12px] text-[#666] mx-[14px]">
            닉네임 미작성 시 랜덤으로 닉네임이 생성됩니다.
          </TextBox>
        </VStack>

        <DatePicker
          label={"날짜를 선택하세요"}
          views={["month", "day"]}
          name="date"
          value={postData && new Date(2024, values.month - 1, values.day)}
          onChange={(newValue) =>
            setValues({ ...values, ...getMonthAndDay(newValue) })
          }
          minDate={new Date(2024, 0, 1)}
          maxDate={new Date(2024, 12, 0)}
        />

        <TextField
          helperText={`내용은 20자 이내로 입력해주세요. (${values.contents.length}/20자)`}
          name="contents"
          value={values.contents}
          onChange={handleChange}
          label="내용"
        />

        <VStack className="gap-2">
          <Button
            variant="contained"
            onClick={
              postData
                ? () => postUpdateMutation.mutate(values)
                : () => postUploadMutation.mutate(values)
            }
          >
            {postData ? "수정" : "등록"}
          </Button>

          {postData && (
            <Button
              variant="contained"
              color="error"
              onClick={() => postDeleteMutation.mutate(postData.id)}
            >
              삭제
            </Button>
          )}
        </VStack>

        <TextBox
          onClick={() => navigate(-1)}
          className="text-center text-gray-600 text-[14px] font-semibold cursor-pointer"
        >
          이전 페이지로 돌아가기
        </TextBox>
      </VStack>
    </Layout>
  );
}
