import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import TextBox from "@components/common/TextBox";
import WeekDays from "@components/calendar/Weekdays";
import DateCell from "@components/calendar/DateCell";
import HStack from "@components/common/HStack";
import { Link, useParams } from "react-router-dom";
import { getMonthDate, getMonthDetails } from "@utils/dateUtil";
import { isCookie as isLogin } from "@utils/cookieUtil";
import { Button } from "@mui/material";

export default function MonthPage() {
  const param = useParams();
  const monthDetails = getMonthDetails(param.monthId);
  const monthDates = getMonthDate(monthDetails);

  return (
    <Layout>
      <Header />

      <HStack className="justify-between items-center px-4">
        <TextBox className="font-semibold">
          2024년 {monthDetails.month}월
        </TextBox>

        {isLogin() && (
          <HStack className="gap-2">
            <Button variant="contained">
              <Link to="/post">소망 작성</Link>
            </Button>
            <Button variant="contained">이미지 업로드</Button>
          </HStack>
        )}
      </HStack>

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
