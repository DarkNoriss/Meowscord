import type { FC, PropsWithChildren } from 'react';

import UserStatusFooter from '@/components/islets/user-status-footer/UserStatusFooter';
import Header from '@/components/layout/header/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';

type DMLayoutProps = PropsWithChildren;

const DMLayout: FC<DMLayoutProps> = () => {
  return (
    <Sidebar>
      <Header>hey</Header>
      <div className="flex-1 overflow-y-auto">
        <div>.</div>
        <div>.</div>
      </div>
      <UserStatusFooter />
    </Sidebar>
  );
};

export default DMLayout;
