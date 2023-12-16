import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const getMonthDetails = (monthId) => {
  const month = monthId || 1; // {param} monthId가 없으면 1월로 설정
  const currentDate = new Date(2024, month - 1); // {param} month의 첫 날짜
  const monthStart = startOfMonth(currentDate); // {param} month의 첫 날짜
  const monthEnd = endOfMonth(currentDate); // {param} month의 마지막 날짜
  const startDate = startOfWeek(monthStart); // {param} month의 첫 주의 첫 날짜
  const endDate = endOfWeek(monthEnd); // {param} month의 마지막 주의 마지막 날짜

  return { month, currentDate, monthStart, monthEnd, startDate, endDate };
};

export const getMonthDate = (monthDetails) => {
  const dateArray = [];
  let day = monthDetails.startDate;
  while (differenceInCalendarDays(monthDetails.endDate, day) >= 0) {
    dateArray.push(day);
    day = addDays(day, 1);
  }

  return dateArray;
};

export const getMonthAndDay = (value) => {
  const date = new Date(value);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { month, day };
};

export const getEndOfDay = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  return currentDate;
};
