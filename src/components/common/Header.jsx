import { Link } from "react-router-dom";
import { isCookie as isLogin } from "@utils/cookieUtil";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-[24px] font-bold">
        <Link to="/">2024 소망 달력</Link>
      </h1>

      {isLogin() ? (
        <div>
          <Link to="/mypage" className="flex gap-1 items-center font-semibold">
            <AccountCircleRoundedIcon className="w-[40px] h-[40px]" />
            MY
          </Link>
        </div>
      ) : (
        <Link
          to="/login"
          className="border py-2 px-3 rounded-lg bg-blue-500 text-white font-semibold"
        >
          입장하기
        </Link>
      )}
    </header>
  );
}
