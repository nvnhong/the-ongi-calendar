import Loading from "@components/common/Loading";
import VStack from "@components/common/VStack";
import useDailyPost from "../../hooks/useDailyPost";
import { Close } from "../../assets/Icon";

export default function DayPostsModal({ month, day, handleCloseModal }) {
  const { dailyPost, isLoading } = useDailyPost(month, day);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-50">
      <div className="fixed min-w-[300px] max-h-[500px] top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden">
        <div className="h-[45px] flex justify-between items-center bg-gray-100 px-4 font-medium">
          <p className="flex gap-2 tracking-wide">
            <span>
              {month}월 {day}일의 소망
            </span>
            <span className="flex items-center bg-blue-500 px-2 rounded-xl text-white text-[14px] tracking-wider">
              {dailyPost.length}개
            </span>
          </p>
          <span className="cursor-pointer" onClick={handleCloseModal}>
            <Close />
          </span>
        </div>

        <div className="max-h-[calc(500px-50px)] overflow-y-auto scrollbar-hide mx-2 text-[14px] tracking-wider">
          {dailyPost.map((post, index) => (
            <VStack
              key={index}
              className={`gap-1 p-2 mb-1 ${
                index === dailyPost.length - 1 ? "" : "border-b"
              }`}
            >
              <p className="text-gray-500 font-semibold">{post.nickname}</p>
              <p className="font-medium">{post.contents}</p>
            </VStack>
          ))}
        </div>
      </div>
    </div>
  );
}
