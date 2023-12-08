import '@/styles/module.css';

import NavbarList from '@/components/islets/navbar/navbar-list';
import NavbarListItemAdd from '@/components/islets/navbar/navbar-list-item-add';
import NavbarListItemDelete from '@/components/islets/navbar/navbar-list-item-delete';
import NavbarServerItemFriend from '@/components/islets/navbar/navbar-list-item-friend';
import NavbarServerItemLogo from '@/components/islets/navbar/navbar-list-item-logo';
import NavbarServerItemMigrate from '@/components/islets/navbar/navbar-list-item-migrate';
import NavbarWrapper from '@/components/layout/navbar/navbar-wrapper';
import { Separator } from '@/components/ui/Separator';
import { TooltipProvider } from '@/components/ui/Tooltip';

const Navbar = () => {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <NavbarWrapper>
      <TooltipProvider>
        <NavbarServerItemLogo />
        <Separator className="mx-auto mb-2 h-[2px] w-8" />
        <NavbarList />
        {isDev && (
          <>
            <NavbarListItemAdd />
            <NavbarListItemDelete />
            <NavbarServerItemFriend />
            <NavbarServerItemMigrate />
          </>
        )}
      </TooltipProvider>
    </NavbarWrapper>
  );
};

export default Navbar;
