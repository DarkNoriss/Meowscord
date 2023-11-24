import DMNavigationFriendsList from '@/components/islets/dm-navigation/dm-navigation-friend-list';
import DMNavigationMenu from '@/components/islets/dm-navigation/dm-navigation-menu';
import UserStatusFooter from '@/components/islets/user-status-footer/user-status-footer';
import NavmenuBodyWrapper from '@/components/layout/navmenu/navmenu-body-wrapper';
import NavmenuHeaderWrapper from '@/components/layout/navmenu/navmenu-header-wrapper';
import NavmenuWrapper from '@/components/layout/navmenu/navmenu-wrapper';
import SearchModal from '@/components/SearchModal';

const DMNavigation = () => {
  return (
    <NavmenuWrapper>
      <NavmenuHeaderWrapper>
        <SearchModal />
      </NavmenuHeaderWrapper>
      <NavmenuBodyWrapper>
        <DMNavigationMenu />
        <DMNavigationFriendsList />
      </NavmenuBodyWrapper>
      <UserStatusFooter />
    </NavmenuWrapper>
  );
};

export default DMNavigation;
