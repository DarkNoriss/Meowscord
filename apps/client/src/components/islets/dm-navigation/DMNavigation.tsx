import DMFriendsList from '@/components/islets/dm-navigation/DMFriendsList';
import DMMenu from '@/components/islets/dm-navigation/DMMenu';
import NavigationBodyWrapper from '@/components/layout/secondary-navigation/NavigationBodyWrapper';
import NavigationHeaderWrapper from '@/components/layout/secondary-navigation/NavigationHeaderWrapper';
import NavigationWrapper from '@/components/layout/secondary-navigation/NavigationWrapper';
import UserStatusFooter from '@/components/layout/user-status-footer/user-status-footer-wrapper';
import SearchModal from '@/components/SearchModal';

const DMNavigation = () => {
  return (
    <NavigationWrapper>
      <NavigationHeaderWrapper>
        <SearchModal />
      </NavigationHeaderWrapper>
      <NavigationBodyWrapper>
        <DMMenu />
        <DMFriendsList />
      </NavigationBodyWrapper>
      <UserStatusFooter />
    </NavigationWrapper>
  );
};

export default DMNavigation;
