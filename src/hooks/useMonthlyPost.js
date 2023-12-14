import { useQuery } from "@tanstack/react-query";
import { getMonthlyPosts } from "../api/postApi";

export default function useMonthlyPosts(month) {
  const { data: monthlyPosts, isLoading } = useQuery({
    queryKey: ["post", month],
    queryFn: () => getMonthlyPosts(month),
  });

  return { monthlyPosts, isLoading };
}
