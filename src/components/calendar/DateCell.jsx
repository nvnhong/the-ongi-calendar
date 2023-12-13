import { format, getMonth } from "date-fns";

export default function DateCell({ date, currentDate, isEventDay, onClick }) {
  const validation = getMonth(currentDate) === getMonth(date);
  const isDay = currentDate.getMonth() + 1 === date.getMonth() + 1;

  return (
    <div
      className={`px-1 py-2 border-r-[1px] border-b-[1px] border-[#f3f4f5] text-center ${
        validation ? "text-[#4a5261]" : ""
      } ${isEventDay && isDay && "bg-blue-50 cursor-pointer"}`}
      onClick={isDay ? onClick : undefined}
    >
      <div>
        <span>{validation ? format(date, "d") : ""}</span>
      </div>
    </div>
  );
}
