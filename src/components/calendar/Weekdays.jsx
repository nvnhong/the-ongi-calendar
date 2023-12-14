import { WEEKDAYS } from "@constants/dateConstants";

export default function WeekDays() {
  return (
    <div className="grid grid-cols-7 divide-x-1 text-center border-b-[#d8dbe0] bg-[#f9fafc] text-[#384152] font-semibold">
      {WEEKDAYS.map((day, index) => (
        <div key={`day${index}`} className="px-1 py-2">
          {day}
        </div>
      ))}
    </div>
  );
}
