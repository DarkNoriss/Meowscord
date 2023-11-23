import DMNavigationFriendsList from '@/components/islets/dm-navigation/dm-navigation-friend-list';
import DMNavigationMenu from '@/components/islets/dm-navigation/dm-navigation-menu';
import UserStatusFooter from '@/components/islets/user-status-footer/user-status-footer';
import NavigationBodyWrapper from '@/components/layout/secondary-navigation/NavigationBodyWrapper';
import NavigationHeaderWrapper from '@/components/layout/secondary-navigation/NavigationHeaderWrapper';
import NavigationWrapper from '@/components/layout/secondary-navigation/NavigationWrapper';
import SearchModal from '@/components/SearchModal';

const DMNavigation = () => {
  return (
    <NavigationWrapper>
      <NavigationHeaderWrapper>
        <SearchModal />
      </NavigationHeaderWrapper>
      <NavigationBodyWrapper>
        <DMNavigationMenu />
        <DMNavigationFriendsList />
      </NavigationBodyWrapper>
      <UserStatusFooter />
    </NavigationWrapper>
  );
};

export default DMNavigation;
