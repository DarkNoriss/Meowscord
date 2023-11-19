import type { FC, PropsWithChildren } from 'react';

import NavigationBodyWrapper from '@/components/layout/secondary-navigation/NavigationBodyWrapper';
import NavigationHeaderWrapper from '@/components/layout/secondary-navigation/NavigationHeaderWrapper';
import NavigationWrapper from '@/components/layout/secondary-navigation/NavigationWrapper';
import UserStatusFooter from '@/components/layout/user-status-footer/UserStatusFooter';
import SearchModal from '@/components/SearchModal';

type DMNavigationProps = PropsWithChildren;

const DMNavigation: FC<DMNavigationProps> = () => {
  return (
    <NavigationWrapper>
      <NavigationHeaderWrapper>
        <SearchModal />
      </NavigationHeaderWrapper>
      <NavigationBodyWrapper>
        <div>.</div>
        <div>.</div>
      </NavigationBodyWrapper>
      <UserStatusFooter />
    </NavigationWrapper>
  );
};

export default DMNavigation;
