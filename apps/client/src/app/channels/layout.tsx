import type { ReactNode } from 'react';

import Navigation from '@/components/islets/navigation/navigation';

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
