import { useQuery } from "@tanstack/react-query";
import { getDailyPosts } from "../api/postApi";

export default function useDailyPost(month, day) {
  const { data: dailyPost, isLoading } = useQuery({
    queryKey: ["dailyPosts", month, day],
    queryFn: () => getDailyPosts(month, day),
  });

  return { dailyPost, isLoading };
}
