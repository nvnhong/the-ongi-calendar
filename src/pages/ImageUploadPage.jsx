import Layout from "@components/common/Layout";
import TextBox from "@components/common/TextBox";
import VStack from "@components/common/VStack";
import Loading from "@components/common/Loading";
import useImage from "@hooks/useImage";
import ImagePlaceholder from "@assets/image_placeholder.png";
import useImageUpload from "@hooks/useImageUpload";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ImageUplaodPage() {
  const { monthId } = useParams();
  const { image, previewImage, inputRef, handleImageChange } = useImage();
  const imageUploadMutation = useImageUpload(monthId, image);

  if (imageUploadMutation.isPending) {
    return (
      <>
        <Loading alt="upload" />
      </>
    );
  }

  return (
    <Layout>
      <VStack className="h-screen justify-center gap-5 mx-4">
        <TextBox className="text-[20px] text-center font-bold">
          이미지 업로드
        </TextBox>
        <TextBox className="mx-4 text-gray-500 text-[14px] text-center">
          <p>이미지는 1개, 1MB 내외로 업로드 가능합니다.</p>
          <p>업로드 시 이미지는 메인 화면에 즉시 적용됩니다.</p>
        </TextBox>

        <VStack
          className="w-[200px] h-[200px] gap-4 justify-center items-center bg-gray-100 rounded-xl mx-auto"
          onClick={() => inputRef.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute w-[200px] h-[200px] border z-50 hidden"
            ref={inputRef}
          />

          <img
            src={image ? previewImage : ImagePlaceholder}
            alt="image"
            className={
              image
                ? "w-[200px] h-[200px] object-cover rounded-xl"
                : "w-[60px] h-[60px]"
            }
          />

          {image ? null : (
            <TextBox className="text-gray-500 text-[14px] text-center">
              <p>박스를 클릭해서</p>
              <p>이미지를 선택해주세요</p>
            </TextBox>
          )}
        </VStack>

        {image && (
          <Button variant="outlined" onClick={() => inputRef.current.click()}>
            이미지 다시 선택하기
          </Button>
        )}

        <Button
          variant="contained"
          disabled={!image}
          onClick={() => imageUploadMutation.mutate(monthId, image)}
        >
          이미지 업로드
        </Button>
      </VStack>
    </Layout>
  );
}
