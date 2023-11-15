import type { ReactNode } from 'react';

import DMLayout from '@/components/islets/dm-layout/DMLayout';
import Navbar from '@/components/layout/navigation/Navbar';

type ChannelsLayoutProps = {
  children: ReactNode;
};
const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <>
      <Navbar />
      <DMLayout>{children}</DMLayout>
    </>
  );
};

export default ChannelsLayout;
