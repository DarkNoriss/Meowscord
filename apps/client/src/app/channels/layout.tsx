import type { ReactNode } from 'react';

import Navigation from '@/components/layout/navigation/Navigation';

type ChannelsLayoutProps = { children: ReactNode };

const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default ChannelsLayout;
