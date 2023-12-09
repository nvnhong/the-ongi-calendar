import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUpload } from "@api/postApi";
import { getUserInfo } from "@api/userApi";
import { useNavigate } from "react-router-dom";

export default function usePostUploadMutation(value) {
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
    mutationFn: () => postUpload({ ...value, ...userInfo }),
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
