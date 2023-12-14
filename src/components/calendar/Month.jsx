import HStack from "@components/common/HStack";
import TextBox from "@components/common/TextBox";
import { LeftArrow, RightArrow } from "@assets/Icon";
import { Link } from "react-router-dom";

export default function Month({ month }) {
  return (
    <HStack className="justify-center items-center gap-4 py-4">
      <Link
        to={`/month/${Number(month) - 1}`}
        className={month === "1" ? "pointer-events-none" : ""}
      >
        <LeftArrow isDisabled={month === "1"} />
      </Link>
      <TextBox className="font-semibold select-none text-[18px]">
        {month}월
      </TextBox>
      <Link
        to={`/month/${Number(month) + 1}`}
        className={month === "12" ? "pointer-events-none" : "first-letter:"}
      >
        <RightArrow isDisabled={month === "12"} />
      </Link>
    </HStack>
  );
}
