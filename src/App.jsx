import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@router/Router";
import ko from "date-fns/locale/ko";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { getCookie } from "@utils/cookieUtil";

export default function App() {
  const queryClient = new QueryClient();
  const isCookie = getCookie("accessToken");

  useEffect(() => {
    if (!isCookie) {
      router.navigate("/");
    }
  }, [isCookie]);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
