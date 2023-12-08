import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import TextBox from "@components/common/TextBox";
import { MONTHS } from "@constants/dateConstants";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <TextBox className="text-center py-5">
        월별로 인재님의 소망과 사진을 기록해보세요
      </TextBox>
      <section className="grid grid-cols-3 mx-1 gap-1">
        {MONTHS.map((month) => (
          <Link
            key={month}
            to={`/month/${month}`}
            className="py-10 border rounded-xl text-center"
          >
            {month}월
          </Link>
        ))}
      </section>
    </Layout>
  );
}
