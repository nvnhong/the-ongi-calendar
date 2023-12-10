import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "@api/userApi";
import { postUpdate } from "@api/postApi";

export default function usePostUpdateMutation(postId, values) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userInfo = getUserInfo();

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
    mutationFn: () => postUpdate(postId, { ...values, ...userInfo }),
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
