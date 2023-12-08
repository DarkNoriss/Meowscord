'use client';

import type { QueryKey } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { useState } from 'react';

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  if (queryKey[0] === 'friends') {
    const response = await axios.get('/api/friends/get');
    return response.data;
  }
  if (queryKey[0] === 'servers') {
    const response = await axios.get('/api/servers/get');
    return response.data;
  }
  return null;
};

type TanstackProviderProps = {
  children: React.ReactNode;
};

const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: defaultQueryFn,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            staleTime: Infinity,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
