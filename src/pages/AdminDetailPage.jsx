import { Search } from "@assets/Icon";
import { useQuery } from "@tanstack/react-query";
import { getDetail } from "@api/adminApi";
import { useState } from "react";
import useModal from "@hooks/useModal";
import Loading from "@components/common/Loading";
import AdminModal from "@components/Modal/AdminModal";

export default function AdminDetailPage() {
  const [inputValue, setInputValue] = useState({ type: "username", value: "" });
  const infoModal = useModal();

  const handleInfoClick = (event) => {
    const clickedElement = event.target;
    const trElement = clickedElement.closest("tr");

    if (trElement) {
      const tdChildValue =
        trElement.querySelector("td:nth-child(1)").textContent;
      infoModal.handleOpenModal();
      infoModal.setSelectedValue(tdChildValue);
      return;
    }
    return;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["search", inputValue.type, inputValue.value],
    queryFn: () => getDetail(inputValue.type, inputValue.value),
    enabled: false,
    retry: false,
  });

  const handleSearchClick = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div>
      {/* 검색바 */}
      <div className="flex flex-col bg-gray-100 m-2 px-3 py-2 border rounded-lg">
        <div className="flex gap-2 py-1">
          <input
            type="radio"
            name="username"
            defaultChecked
            onChange={() =>
              setInputValue({
                ...inputValue,
                type: import.meta.env.VITE_REACT_APP_ADMIN_V_4,
              })
            }
          />
          {import.meta.env.VITE_REACT_APP_ADMIN_V_3}
          <input
            type="radio"
            name="username"
            onChange={() =>
              setInputValue({
                ...inputValue,
                type: import.meta.env.VITE_REACT_APP_ADMIN_V_6,
              })
            }
          />
          {import.meta.env.VITE_REACT_APP_ADMIN_V_5}
        </div>
        <div className="flex items-center gap-1">
          <input
            type="text"
            className="w-full h-[35px] px-2 border rounded-md outline-none"
            onChange={(e) =>
              setInputValue({ ...inputValue, value: e.target.value })
            }
          />
          <button
            className="bg-[#027ffe] p-1 border rounded-lg"
            onClick={handleSearchClick}
          >
            <Search />
          </button>
        </div>
      </div>

      {/* 바디 */}
      {data ? (
        <table className="w-full border border-collapse text-[14px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border py-2">
                {import.meta.env.VITE_REACT_APP_ADMIN_T_1}
              </th>
              <th className="border py-2">
                {import.meta.env.VITE_REACT_APP_ADMIN_T_2}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="cursor-pointer hover:bg-sky-100"
              onClick={handleInfoClick}
            >
              <td className="border text-center py-2">
                {data[import.meta.env.VITE_REACT_APP_ADMIN_S_1]}
              </td>
              <td className="border text-center py-2">
                {data[import.meta.env.VITE_REACT_APP_ADMIN_S_2]}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center font-semibold mx-2 my-5 py-5 border rounded-lg">
          검색 결과가 없습니다.
        </div>
      )}
      {infoModal.isModal && (
        <AdminModal
          value={infoModal.selectedValue}
          handleCloseModal={infoModal.handleCloseModal}
        />
      )}
    </div>
  );
}
