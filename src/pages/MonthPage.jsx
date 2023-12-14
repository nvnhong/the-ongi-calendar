import Common from "@components/common";
import Calendar from "@components/calendar";
import DayPostsModal from "@components/Modal/DayPostsModal";
import useModal from "@hooks/useModal";
import { getMonthDate, getMonthDetails } from "@utils/dateUtil";
import { isCookie as isLogin } from "@utils/cookieUtil";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { getMonthlyPosts } from "@api/postApi";
import { getMonthlyImages } from "@api/photoApi";

export default function MonthPage() {
  const param = useParams();
  const dayPostsModal = useModal();
  const monthDetails = getMonthDetails(param.monthId);
  const [selectedDay, setSelectedDay] = useState(null);
  const monthDates = getMonthDate(monthDetails);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["post", param.monthId],
        queryFn: () => getMonthlyPosts(param.monthId),
      },
      {
        queryKey: ["image", param.monthId],
        queryFn: () => getMonthlyImages(param.monthId),
      },
    ],
  });

  const [monthlyPostsQuery, monthlyImagesQuery] = queries;
  const monthlyPosts = monthlyPostsQuery.data;
  const monthlyImages = monthlyImagesQuery.data;
  const isLoading = queries.some((query) => query.isLoading);

  if (isLoading)
    return (
      <>
        <Common.Loading />
      </>
    );

  return (
    <Common.Layout>
      <Common.Header />

      <Common.HStack className="justify-end items-center border py-2">
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

      {/* 이달의 사진 표시 */}
      <Common.ImageSlider imageList={monthlyImages} />

      {/* 해당 월 표시 */}
      <Calendar.Month month={monthDetails.month} />

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

      {/* 해당월 통계 */}
      <Common.VStack className="gap-2 mx-2 my-4 p-2 text-[14px] border-t border-b">
        <Common.TextBox>
          <span className="font-semibold">이달의 소망 개수</span> :{" "}
          {monthlyPosts.length}개
        </Common.TextBox>
        {monthlyPosts.length > 0 && (
          <Common.TextBox>
            <span className="font-semibold">최근 등록된 소망</span> :{" "}
            {monthlyPosts[monthlyPosts.length - 1].contents}
          </Common.TextBox>
        )}
        <Common.TextBox>
          <span className="font-semibold">이달의 사진 : </span>
          <span>{monthlyImages.length}장</span>
        </Common.TextBox>
      </Common.VStack>

      <div className="h-[1px]"></div>

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
