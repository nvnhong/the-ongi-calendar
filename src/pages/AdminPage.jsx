import Layout from "@components/common/Layout";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function AdminPage() {
  const { pathname } = useLocation();

  return (
    <Layout>
      {/* 헤더 */}
      <header className="flex justify-between items-center px-4">
        <Link
          to="/admin"
          className="flex justify-center py-4 text-[24px] font-bold"
        >
          {import.meta.env.VITE_REACT_APP_ADMIN_H}
        </Link>

        <Link
          to="/"
          className="bg-[#027ffe] px-2 py-1 border rounded-lg font-semibold text-white"
        >
          Home
        </Link>
      </header>

      {/* nav */}
      <nav className="flex gap-2 mx-4">
        <Link
          to={`${import.meta.env.VITE_REACT_APP_ADMIN_U_1}`}
          className={`flex flex-1 justify-center items-center p-1 ${
            pathname === import.meta.env.VITE_REACT_APP_ADMIN_U_1
              ? "border-b-4 border-[#027ffe] font-bold"
              : "border-b font-semibold"
          }`}
        >
          전체 조회
        </Link>
        <Link
          to={`${import.meta.env.VITE_REACT_APP_ADMIN_U_2}`}
          className={`flex flex-1 justify-center items-center p-1 ${
            pathname === import.meta.env.VITE_REACT_APP_ADMIN_U_2
              ? "border-b-4 border-[#027ffe] font-bold"
              : "border-b font-semibold"
          }`}
        >
          검색
        </Link>
      </nav>

      <div className="py-3">
        <Outlet />
      </div>
    </Layout>
  );
}
