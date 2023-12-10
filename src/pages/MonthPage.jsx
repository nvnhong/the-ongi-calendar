import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import HStack from "@components/common/HStack";
import VStack from "@components/common/VStack";
import TextBox from "@components/common/TextBox";
import Loading from "@components/common/Loading";
import Month from "@components/calendar/Month";
import WeekDays from "@components/calendar/Weekdays";
import DateCell from "@components/calendar/DateCell";
import { Link, useParams } from "react-router-dom";
import { getMonthDate, getMonthDetails } from "@utils/dateUtil";
import { isCookie as isLogin } from "@utils/cookieUtil";
import { Button } from "@mui/material";
import useMonthlyPosts from "@hooks/useMonthlyPost";

export default function MonthPage() {
  const param = useParams();
  const monthDetails = getMonthDetails(param.monthId);
  const monthDates = getMonthDate(monthDetails);
  const { monthlyPosts, isLoading } = useMonthlyPosts(monthDetails.month);

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <Layout>
      <Header />

      <HStack className="justify-between items-center px-4">
        <Month month={monthDetails.month} />

        {isLogin() && (
          <HStack className="gap-2">
            <Button variant="contained">
              <Link to="/post">소망 작성</Link>
            </Button>
            <Button variant="contained">
              <Link to="/photo">이미지 업로드</Link>
            </Button>
          </HStack>
        )}
      </HStack>

      {/* 요일 표시 */}
      <WeekDays />

      {/* 날짜 표시 */}
      <div className="grid grid-cols-7 border-t-[1px] border-l-[1px] border-[#f3f4f5]">
        {monthDates.map((date, index) => {
          const isEventDay = monthlyPosts.some(
            (event) => Number(event.day) === date.getDate()
          );

          return (
            <DateCell
              key={`date${index}`}
              date={date}
              isEventDay={isEventDay}
              currentDate={monthDetails.currentDate}
            />
          );
        })}
      </div>

      <VStack className="bg-gray-100 gap-2 m-4 p-2 rounded-lg text-[14px]">
        <TextBox>
          <span className="font-semibold">작성된 소망 총 갯수</span> :{" "}
          {monthlyPosts.length}개
        </TextBox>
        {monthlyPosts.length > 0 && (
          <TextBox>
            <span className="font-semibold">최근 등록된 소망</span> :{" "}
            {monthlyPosts[monthlyPosts.length - 1].contents}
          </TextBox>
        )}
      </VStack>
    </Layout>
  );
}
