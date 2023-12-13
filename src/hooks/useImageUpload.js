import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "@api/photoApi";
import { useNavigate } from "react-router-dom";

export default function useImageUpload(monthId, value) {
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
    mutationFn: () => imageUpload(monthId, value),
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      navigate("/");
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
