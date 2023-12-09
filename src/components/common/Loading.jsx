import Spinner from "@assets/loading-spinner.gif";
import TextBox from "./TextBox";

export default function Loading() {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-white z-50 flex flex-col items-center justify-center">
      <img src={Spinner} alt="loading" className="w-20 h-20" />
      <TextBox className="text-center">잠시만 기다려주세요</TextBox>
    </div>
  );
}
