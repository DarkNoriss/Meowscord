import type { FC, PropsWithChildren } from 'react';

import DMHeader from '@/components/islets/dm-navigation/DMHeader';
import UserStatusFooter from '@/components/layout/user-status-footer/UserStatusFooter';
import NavigationWrapper from '@/components/NavigationWrapper';

type DMNavigationProps = PropsWithChildren;

const DMNavigation: FC<DMNavigationProps> = () => {
  return (
    <NavigationWrapper>
      <DMHeader>hey</DMHeader>
      <div className="flex-1 overflow-y-auto">
        <div>.</div>
        <div>.</div>
      </div>
      <UserStatusFooter />
    </NavigationWrapper>
  );
};

export default DMNavigation;