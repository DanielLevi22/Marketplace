"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/trpc/client";
import { httpBatchLink } from "@trpc/client";


const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryCLient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>   trpc.createClient({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/trpc`,
        fetch(url,options) {
          return fetch(url,{
            ...options,
            credentials: 'include',
          })
        } 
      }),
    ]
  }));
  return (
    <trpc.Provider client={trpcClient} queryClient={queryCLient}>
      <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
};
export default Providers;
