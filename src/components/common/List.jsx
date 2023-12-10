import VStack from "./VStack";
import HStack from "./HStack";
import TextBox from "./TextBox";

export default function List({ value, onListClick }) {
  const { nickname, contents, month, day } = value;
  return (
    <VStack
      className="border-b gap-2 py-3 px-2 cursor-pointer"
      onClick={onListClick}
    >
      <HStack className="flex items-center gap-2 text-[14px]">
        <TextBox className="text-gray-600 font-semibold">{nickname}</TextBox>
        <TextBox className="bg-blue-50 px-2 py-1 rounded-md font-medium">{`${month}월 ${day}일`}</TextBox>
      </HStack>
      <TextBox className="font-medium">{contents}</TextBox>
    </VStack>
  );
}
