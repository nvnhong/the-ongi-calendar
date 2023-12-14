import VStack from "@components/common/VStack";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ImageModal({
  image,
  handleCloseModal,
  handleDeleteEvent,
}) {
  const { month, photoURL } = image;
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-50">
      <div className="fixed min-w-[300px] max-h-[500px] top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden">
        <div className="h-[45px] flex justify-between items-center bg-gray-100 px-4 font-medium">
          <p className="flex gap-2 tracking-wide">
            <span>{month}월의 이미지</span>
          </p>
          <span className="cursor-pointer" onClick={handleCloseModal}>
            <Close />
          </span>
        </div>

        <VStack className="p-2 gap-2">
          <div>
            <img
              className="w-full h-[300px] object-cover"
              src={photoURL}
              alt="image"
            />
          </div>

          <Button variant="contained" color="error" onClick={handleDeleteEvent}>
            삭제하기
          </Button>
        </VStack>
      </div>
    </div>
  );
}
