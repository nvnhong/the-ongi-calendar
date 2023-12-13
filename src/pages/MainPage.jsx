import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import TextBox from "@components/common/TextBox";
import Loading from "@components/common/Loading";
import { MONTHS } from "@constants/dateConstants";
import useYearlyImages from "@hooks/useYearlyImages";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { yearlyImages, isLoading } = useYearlyImages();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Layout>
      <Header />
      <TextBox className="flex flex-col gap-2 text-center py-5 border-t border-b text-[12px] italic text-gray-600 mx-4">
        <p>" 긴 여행의 날들, 끝없는 행운만이 그대와 함께이길 "</p>
        <p>페퍼톤스, 행운을 빌어요</p>
        <p className="not-italic text-black">
          2024년에 <span className="font-semibold">꼭 이루고 싶은 소망</span>과{" "}
          <span className="font-semibold">나누고 싶은 이미지</span>를
          올려주세요.
        </p>
      </TextBox>
      <section className="grid grid-cols-3 gap-1 mx-1 py-3">
        {MONTHS.map((month, index) => (
          <Link
            key={month}
            to={`/month/${month}`}
            className="relative overflow-hidden text-center"
          >
            <img
              src={yearlyImages[index].photoURL}
              className="w-full h-[100px] object-cover"
            />
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 font-semibold text-white text-[18px] tracking-widest drop-shadow-[0_0_7px_rgba(8,36,36,0.7)]">
              {month}월
            </span>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
