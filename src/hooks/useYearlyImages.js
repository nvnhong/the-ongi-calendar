import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/photoApi";

export default function useYearlyImages() {
  const { data: yearlyImages, isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: getImages,
  });

  return { yearlyImages, isLoading };
}
