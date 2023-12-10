import HStack from "@components/common/HStack";
import TextBox from "@components/common/TextBox";
import { LeftArrow, RightArrow } from "@assets/icon";
import { Link } from "react-router-dom";

export default function Month({ month }) {
  return (
    <HStack className="items-center gap-2">
      <Link
        to={`/month/${Number(month) - 1}`}
        className={month === "1" ? "pointer-events-none" : ""}
      >
        <LeftArrow isDisabled={month === "1"} />
      </Link>
      <TextBox className="font-semibold select-none">{month}월</TextBox>
      <Link
        to={`/month/${Number(month) + 1}`}
        className={month === "12" ? "pointer-events-none" : "first-letter:"}
      >
        <RightArrow isDisabled={month === "12"} />
      </Link>
    </HStack>
  );
}
