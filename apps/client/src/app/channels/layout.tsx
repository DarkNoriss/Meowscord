import type { ReactNode } from 'react';

import Navbar from '@/components/islets/navbar/navbar';
import TanstackProvider from '@/components/providers/tanstack-provider';

type ChannelsLayoutProps = { children: ReactNode };

const Layout = ({ children }: ChannelsLayoutProps) => {
  return (
    <TanstackProvider>
      <Navbar />
      {children}
    </TanstackProvider>
  );
};

export default Layout;
