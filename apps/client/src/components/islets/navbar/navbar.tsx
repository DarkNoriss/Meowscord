import '@/styles/module.css';

import NavbarServerAdd from '@/components/islets/navbar/navbar-server-add';
import NavbarServerList from '@/components/islets/navbar/navbar-server-list';
import NavbarServerListItemMigrate from '@/components/islets/navbar/navbar-server-list-item-migrate';
import NavbarServerLogo from '@/components/islets/navbar/navbar-server-logo';
import NavbarWrapper from '@/components/layout/navbar/navbar-wrapper';
import { Separator } from '@/components/ui/Separator';
import { TooltipProvider } from '@/components/ui/Tooltip';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <TooltipProvider>
        <NavbarServerLogo />
        <Separator className="mx-auto mb-2 h-[2px] w-8" />
        <NavbarServerList />
        <NavbarServerAdd />
        <NavbarServerListItemMigrate />
      </TooltipProvider>
    </NavbarWrapper>
  );
};

export default Navbar;
