import { useQuery } from "@tanstack/react-query";
import { getInfo } from "@api/adminApi";
import Loading from "@components/common/Loading";
import useModal from "@hooks/useModal";
import AdminModal from "../components/Modal/AdminModal";

export default function AdminInfoPage() {
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

  const { data, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: getInfo,
  });

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="mx-2">
      <table className="w-full border border-collapse text-[14px]">
        <caption className="p-1 font-semibold">{data.length} / 100</caption>
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
          {data?.map((item, index) => (
            <tr
              key={index}
              className="cursor-pointer hover:bg-sky-100"
              onClick={handleInfoClick}
            >
              <td className="border text-center py-2">
                {item[import.meta.env.VITE_REACT_APP_ADMIN_S_1]}
              </td>
              <td className="border text-center py-2">
                {item[import.meta.env.VITE_REACT_APP_ADMIN_S_2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {infoModal.isModal && (
        <AdminModal
          value={infoModal.selectedValue}
          handleCloseModal={infoModal.handleCloseModal}
        />
      )}
    </div>
  );
}
