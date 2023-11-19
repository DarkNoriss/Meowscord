import NavigationBodyWrapper from '@/components/layout/secondary-navigation/NavigationBodyWrapper';
import NavigationHeaderWrapper from '@/components/layout/secondary-navigation/NavigationHeaderWrapper';
import NavigationWrapper from '@/components/layout/secondary-navigation/NavigationWrapper';
import UserStatusFooter from '@/components/layout/user-status-footer/UserStatusFooter';
import SearchModal from '@/components/SearchModal';

import DMFriendsList from './DMFriendsList';

const DMNavigation = () => {
  return (
    <NavigationWrapper>
      <NavigationHeaderWrapper>
        <SearchModal />
      </NavigationHeaderWrapper>
      <NavigationBodyWrapper>
        <DMFriendsList />
      </NavigationBodyWrapper>
      <UserStatusFooter />
    </NavigationWrapper>
  );
};

export default DMNavigation;
