import type { ReactNode } from 'react';

import Navigation from '@/components/islets/navigation/navigation';
import TanstackProvider from '@/components/providers/tanstack-provider';

type ChannelsLayoutProps = { children: ReactNode };

const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <TanstackProvider>
      <Navigation />
      {children}
    </TanstackProvider>
  );
};

export default ChannelsLayout;
