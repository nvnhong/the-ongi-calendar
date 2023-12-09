import Layout from "@components/common/Layout";
import VStack from "@components/common/VStack";
import HStack from "@components/common/HStack";
import TextBox from "@components/common/TextBox";
import useInput from "@hooks/useInput";
import { getMonthAndDay } from "@utils/dateUtil";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, TextField } from "@mui/material";
import usePostUploadMutation from "@hooks/usePostUploadMutation";

export default function PostPage() {
  const { values, setValues, handleChange } = useInput({
    nickname: "",
    month: "",
    day: "",
    contents: "",
  });

  const postUploadMutation = usePostUploadMutation(values);

  return (
    <Layout>
      <VStack className="h-screen gap-5 px-4 justify-center">
        <TextBox className="text-[20px] text-center font-bold">
          소망 작성하기
        </TextBox>

        <HStack className="gap-1">
          <TextField
            helperText={`닉네임은 10자 이내로 작성해주세요. (${values.nickname.length}/10자)`}
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            label="닉네임"
          />
          <Button variant="contained" className="h-[56px]">
            랜덤
          </Button>
        </HStack>

        <DatePicker
          label={"날짜를 선택하세요"}
          views={["month", "day"]}
          name="date"
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

        <Button
          variant="contained"
          onClick={() => postUploadMutation.mutate(values)}
        >
          등록
        </Button>
      </VStack>
    </Layout>
  );
}
