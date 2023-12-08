import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import TextBox from "@components/common/TextBox";
import WeekDays from "@components/calendar/Weekdays";
import DateCell from "@components/calendar/DateCell";
import { useParams } from "react-router-dom";
import { getMonthDate, getMonthDetails } from "@utils/dateUtil";

export default function MonthPage() {
  const param = useParams();
  const monthDetails = getMonthDetails(param.monthId);
  const monthDates = getMonthDate(monthDetails);

  return (
    <Layout>
      <Header />

      <TextBox className="px-4 font-semibold">
        2024년 {monthDetails.month}월
      </TextBox>

      {/* 요일 표시 */}
      <WeekDays />

      {/* 날짜 표시 */}
      <div className="grid grid-cols-7 border-t-[1px] border-l-[1px] border-[#f3f4f5]">
        {monthDates.map((date, index) => (
          <DateCell
            key={`date${index}`}
            date={date}
            currentDate={monthDetails.currentDate}
          />
        ))}
      </div>
    </Layout>
  );
}
