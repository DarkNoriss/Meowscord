'use client';

import type { QueryKey } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import { generateFakeFriends, generateFakeServers } from '@/lib/mock';

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  if (queryKey[0] === 'friends') {
    const response = await generateFakeFriends(30);
    return response;
  }
  if (queryKey[0] === 'servers') {
    const response = await generateFakeServers(30);
    return response;
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
