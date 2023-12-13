import LoadingSpinner from "@assets/loading-spinner.gif";
import UploadSpinner from "@assets/upload-spinner.gif";
import TextBox from "./TextBox";

const loadingType = {
  loading: LoadingSpinner,
  upload: UploadSpinner,
};

export default function Loading({ alt = "loading" }) {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-white z-50 flex flex-col items-center justify-center">
      <img src={loadingType[alt]} alt={alt} className="w-20 h-20" />
      <TextBox className="text-center">잠시만 기다려주세요</TextBox>
    </div>
  );
}
