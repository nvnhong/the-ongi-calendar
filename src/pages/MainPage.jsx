import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import TextBox from "@components/common/TextBox";
import Loading from "@components/common/Loading";
import { MONTHS } from "@constants/dateConstants";
import useYearlyImages from "@hooks/useYearlyImages";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { yearlyImages, isLoading } = useYearlyImages();

  console.log(yearlyImages);

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
      <TextBox className="text-center py-5">
        월별로 인재님의 소망과 사진을 기록해보세요
      </TextBox>
      <section className="grid grid-cols-3">
        {MONTHS.map((month, index) => (
          <Link
            key={month}
            to={`/month/${month}`}
            className="relative overflow-hidden text-center"
          >
            <img
              src={yearlyImages[index].photoURL}
              className="w-full h-[100px] object-cover opacity-100 blur-[1px]"
            />
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50  w-full h-full flex items-center justify-center bg-white/30 font-normal text-[18px] tracking-widest text-gray-600">
              {month}월
            </span>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
