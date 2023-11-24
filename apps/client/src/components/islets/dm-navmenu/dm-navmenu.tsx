import DMNavmenuFriendsList from '@/components/islets/dm-navmenu/dm-navmenu-friend-list';
import DMNavmenuMenu from '@/components/islets/dm-navmenu/dm-navmenu-menu';
import UserStatusFooter from '@/components/islets/user-status-footer/user-status-footer';
import NavmenuBodyWrapper from '@/components/layout/navmenu/navmenu-body-wrapper';
import NavmenuHeaderWrapper from '@/components/layout/navmenu/navmenu-header-wrapper';
import NavmenuWrapper from '@/components/layout/navmenu/navmenu-wrapper';
import SearchModal from '@/components/SearchModal';

const DMNavmenu = () => {
  return (
    <NavmenuWrapper>
      <NavmenuHeaderWrapper>
        <SearchModal />
      </NavmenuHeaderWrapper>
      <NavmenuBodyWrapper>
        <DMNavmenuMenu />
        <DMNavmenuFriendsList />
      </NavmenuBodyWrapper>
      <UserStatusFooter />
    </NavmenuWrapper>
  );
};

export default DMNavmenu;
