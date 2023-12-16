import { Button } from "@mui/material";
import VStack from "@components/common/VStack";
import TextBox from "@components/common/TextBox";

export default function ServiceInfoModal({
  handleCloseModal,
  handleInfoCloseClick,
}) {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-50">
      <div className="fixed max-w-[300px] max-h-[500px] top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden">
        <div className="h-[45px] flex justify-center items-center bg-gray-100 font-semibold">
          소망 달력 캘린더 이용 정보
        </div>

        <VStack className="gap-3 py-3 px-4">
          <VStack className="text-[14px] gap-1 tracking-wide">
            <p className="font-medium">안녕하세요,</p>
            <p className="font-medium">
              소망 달력에 입장하신 여러분 환영합니다!
            </p>
            <p className="font-medium">
              2024 소망 달력은 여러분이 업로드한 소망글과 이미지가 실제 달력으로
              제작되는 프로젝트입니다.
            </p>
            <p className="font-medium">
              해당 서비스는 12월 24일 오후 11시 59분까지 운영되니 2024년에
              이루고 싶은 소망을 마음껏 입력해주세요.
            </p>

            <VStack className="text-[12px] text-gray-600 gap-[2px]  py-2">
              <TextBox className="flex gap-[2px]">
                <p>*</p>
                <p>소망 글, 이미지 업로드 횟수는 제한이 없습니다.</p>
              </TextBox>
              <TextBox className="flex gap-[2px]">
                <p>*</p>
                <p>모든 달에 소망을 입력하지 않으셔도 됩니다.</p>
              </TextBox>
              <TextBox className="flex gap-[2px]">
                <p>*</p>
                <p>실제 달력에는 서비스에 입력된 모두의 소망이 반영됩니다.</p>
              </TextBox>
              <TextBox className="flex gap-[2px]">
                <p>*</p>
                <p>
                  실제 달력 디자인 상황에 따라 업로드된 이미지 중 일부만 활용할
                  수도 있다는 점 미리 양해 부탁드립니다.
                </p>
              </TextBox>
            </VStack>
          </VStack>

          <div className="flex justify-around text-[14px] py-2">
            <Button
              variant="contained"
              sx={{ border: "1px solid #3b81f6", height: "30px" }}
              onClick={handleInfoCloseClick}
            >
              오늘 하루만 보지 않기
            </Button>

            <Button
              sx={{ border: "1px solid #3b81f6", height: "30px" }}
              onClick={handleCloseModal}
            >
              닫기
            </Button>
          </div>
        </VStack>
      </div>
    </div>
  );
}
