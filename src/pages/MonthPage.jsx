import Common from "@components/common";
import Calendar from "@components/calendar";
import DayPostsModal from "@components/Modal/DayPostsModal";
import useModal from "@hooks/useModal";
import useMonthlyPosts from "@hooks/useMonthlyPost";
import { getMonthDate, getMonthDetails } from "@utils/dateUtil";
import { isCookie as isLogin } from "@utils/cookieUtil";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function MonthPage() {
  const param = useParams();
  const dayPostsModal = useModal();
  const monthDetails = getMonthDetails(param.monthId);
  const monthDates = getMonthDate(monthDetails);
  const { monthlyPosts, isLoading } = useMonthlyPosts(monthDetails.month);
  const [selectedDay, setSelectedDay] = useState(null);

  if (isLoading)
    return (
      <>
        <Common.Loading />
      </>
    );

  return (
    <Common.Layout>
      <Common.Header />

      <Common.HStack className="justify-between items-center px-4">
        <Calendar.Month month={monthDetails.month} />

        {isLogin() && (
          <Common.HStack className="gap-2">
            <Button variant="contained">
              <Link to="/post">소망 작성</Link>
            </Button>
            <Button variant="contained">
              <Link to={`/photo/${param.monthId}`}>이미지 업로드</Link>
            </Button>
          </Common.HStack>
        )}
      </Common.HStack>

      {/* 요일 표시 */}
      <Calendar.WeekDays />

      {/* 날짜 표시 */}
      <div className="grid grid-cols-7 border-t-[1px] border-l-[1px] border-[#f3f4f5]">
        {monthDates.map((date, index) => {
          const isEventDay = monthlyPosts.some(
            (event) => Number(event.day) === date.getDate()
          );

          return (
            <Calendar.DateCell
              key={`date${index}`}
              date={date}
              isEventDay={isEventDay}
              currentDate={monthDetails.currentDate}
              onClick={() => {
                dayPostsModal.handleOpenModal();
                setSelectedDay(date.getDate());
              }}
            />
          );
        })}
      </div>

      <Common.VStack className="bg-gray-100 gap-2 m-4 p-2 rounded-lg text-[14px]">
        <Common.TextBox>
          <span className="font-semibold">이달의 소망 갯수</span> :{" "}
          {monthlyPosts.length}개
        </Common.TextBox>
        {monthlyPosts.length > 0 && (
          <Common.TextBox>
            <span className="font-semibold">최근 등록된 소망</span> :{" "}
            {monthlyPosts[monthlyPosts.length - 1].contents}
          </Common.TextBox>
        )}
      </Common.VStack>

      {dayPostsModal.isModal && (
        <DayPostsModal
          month={param.monthId}
          day={selectedDay}
          handleCloseModal={dayPostsModal.handleCloseModal}
        />
      )}
    </Common.Layout>
  );
}
