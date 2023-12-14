import Layout from "@components/common/Layout";
import TextBox from "@components/common/TextBox";
import VStack from "@components/common/VStack";
import Loading from "@components/common/Loading";
import useImage from "@hooks/useImage";
import { MONTHS } from "@constants/dateConstants";
import ImagePlaceholder from "@assets/image_placeholder.png";
import useImageUpload from "@hooks/useImageUpload";
import { Button } from "@mui/material";
import { useState } from "react";

export default function ImageUplaodPage() {
  const [month, setMonth] = useState(null);
  const { image, previewImage, inputRef, handleImageChange } = useImage();
  const imageUploadMutation = useImageUpload(month, image);

  if (imageUploadMutation.isPending) {
    return (
      <>
        <Loading alt="upload" />
      </>
    );
  }

  if (imageUploadMutation.error) {
    return <Layout>{imageUploadMutation.error}</Layout>;
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

        <VStack className="gap-2">
          <TextBox className="font-semibold text-gray-600">
            월 선택 <span className="font-semibold text-red-600">*</span>
          </TextBox>
          <div className="grid grid-cols-6 gap-1">
            {MONTHS.map((number) => (
              <button
                key={number}
                className={`flex justify-center items-center py-1 border rounded-md ${
                  month === number && "text-white font-bold bg-[#1876d1]"
                }`}
                onClick={() => setMonth(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </VStack>

        <TextBox className="font-semibold text-gray-600">
          이미지 선택 <span className="font-semibold text-red-600">*</span>
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

        <VStack className="gap-2">
          {image && (
            <Button variant="outlined" onClick={() => inputRef.current.click()}>
              이미지 다시 선택하기
            </Button>
          )}

          <Button
            variant="contained"
            disabled={!image || !month}
            onClick={() => imageUploadMutation.mutate(month, image)}
          >
            이미지 업로드
          </Button>
        </VStack>
      </VStack>
    </Layout>
  );
}
