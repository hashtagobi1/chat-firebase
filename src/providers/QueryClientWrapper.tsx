"use client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

type Props = {};

const queryClient = new QueryClient();

const QueryClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientWrapper;
