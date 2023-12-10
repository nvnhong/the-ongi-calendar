import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postDelete } from "@api/postApi";

export default function usePostDelete(postId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data,
    error,
    isError,
    isIdle,
    isPending,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
    submittedAt,
    variables,
  } = useMutation({
    mutationFn: () => postDelete(postId),
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      navigate(-1);
    },
  });

  return {
    data,
    error,
    isError,
    isIdle,
    isPending,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
    submittedAt,
    variables,
  };
}
