import List from "@components/common/List";
import Loading from "@components/common/Loading";
import { Close } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { getDetail } from "@api/adminApi";

export default function AdminModal({ value, handleCloseModal }) {
  const { data, isLoading } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getDetail(import.meta.env.VITE_REACT_APP_ADMIN_S_1, value),
  });

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-50">
      <div className="fixed min-w-[300px] max-h-[500px] top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden">
        <div className="h-[45px] flex justify-between items-center bg-gray-100 px-4 font-medium">
          <p className="flex gap-2 tracking-wide">
            <span>{`${data.username}(${data.phoneNum})`}</span>
          </p>
          <span className="cursor-pointer" onClick={handleCloseModal}>
            <Close />
          </span>
        </div>

        <div className="m-2">
          <div>
            {data?.memoList?.map((item, index) => (
              <List
                key={index}
                className="p-1 border rounded-lg"
                value={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
