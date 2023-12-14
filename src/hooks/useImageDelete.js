import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteImage } from "../api/photoApi";

export default function useImageDelete(imageId, onSuccessCallback = () => {}) {
  const queryClient = useQueryClient();
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
    mutationFn: () => deleteImage(imageId),
    onSuccess: () => {
      queryClient.invalidateQueries(["image"]);
      onSuccessCallback();
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
