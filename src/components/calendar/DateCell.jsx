import { format, getMonth } from "date-fns";

export default function DateCell({ date, currentDate }) {
  const validation = getMonth(currentDate) === getMonth(date);

  return (
    <div
      className={`px-1 py-2 border-r-[1px] border-b-[1px] border-[#f3f4f5] cursor-pointer text-center ${
        validation ? "text-[#4a5261]" : "text-[#8c919c] bg-[#f9fafc]"
      }`}
    >
      <div>
        <span>{format(date, "d")}</span>
      </div>
    </div>
  );
}
