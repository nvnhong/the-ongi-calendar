import Layout from "@components/common/Layout";
import TextBox from "@components/common/TextBox";
import VStack from "@components/common/VStack";
import useInput from "@hooks/useInput";
import useLoginMutation from "@hooks/useLoginMutation";
import { validateName, validatePhone } from "@utils/validationUtil";
import { Person, PhoneAndroid } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
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
      <VStack className="h-screen justify-center gap-5 px-2">
        <TextBox className="text-[20px] text-center font-bold">
          2024 소망 달력
        </TextBox>

        <VStack className="text-gray-600 text-[14px] bg-gray-100 px-2 py-2 rounded-lg gap-2">
          <p className="text-justify w-full ">
            • 실명과 핸드폰 끝 번호 네 자리를 정확하게 기입해 주세요.
          </p>

          <p className="text-justify w-full">
            • 개인정보는 서비스 종료 시 모두 폐기됩니다.
          </p>
        </VStack>

        <TextField
          required
          error={validateName(values.username)}
          helperText={
            validateName(values.username) &&
            "이름은 2글자 이상 한글로 입력해주세요"
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
            "핸드폰 끝 번호 4자리를 입력해주세요"
          }
          name="phoneNum"
          value={values.phoneNum}
          onChange={handleChange}
          label="핸드폰 (끝 번호 4자리)"
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
          입장하기
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
