import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[60px] flex justify-between items-center px-4">
      <h1 className="text-[20px] font-bold">더온기 캘린더</h1>
      <Link to="/login">로그인</Link>
    </header>
  );
}
