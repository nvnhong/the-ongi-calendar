import Layout from "@components/common/Layout";
import TextBox from "@components/common/TextBox";
import useInput from "@hooks/useInput";
import useLoginMutation from "@hooks/useLoginMutation";
import VStack from "@components/common/VStack";
import { Person, PhoneAndroid } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { validateName, validatePhone } from "@utils/validationUtil";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const naviagte = useNavigate();

  const { values, handleChange } = useInput({
    username: "",
    phoneNum: "",
  });

  const { mutate } = useLoginMutation(values);

  return (
    <Layout>
      <VStack className="h-screen justify-center gap-5 px-4">
        <TextBox className="text-[20px] text-center font-bold">
          더온기 캘린더 로그인
        </TextBox>

        <TextField
          required
          error={validateName(values.username)}
          helperText={
            validateName(values.username) &&
            "이름은 3글자 이상 한글로 입력해주세요"
          }
          name="username"
          value={values.username}
          onChange={handleChange}
          label="이름"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          error={validatePhone(values.phoneNum)}
          helperText={
            validatePhone(values.phoneNum) &&
            "핸드폰 뒷자리 4자리를 입력해주세요"
          }
          name="phoneNum"
          value={values.phoneNum}
          onChange={handleChange}
          label="핸드폰 (뒷번호 4자리)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroid />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          onClick={() => mutate(values)}
          disabled={
            validateName(values.username) || validatePhone(values.phoneNum)
          }
        >
          로그인
        </Button>

        <TextBox
          onClick={() => naviagte(-1)}
          className="text-center text-gray-600 font-semibold cursor-pointer"
        >
          이전 페이지로 돌아가기
        </TextBox>
      </VStack>
    </Layout>
  );
}
