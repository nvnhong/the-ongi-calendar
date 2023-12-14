import { useQuery } from "@tanstack/react-query";
import { getMonthImages } from "../api/photoApi";

export default function useMonthlyImages(monthId) {
  const { data: monthlyImages, isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: () => getMonthImages(monthId),
  });

  return { monthlyImages, isLoading };
}
