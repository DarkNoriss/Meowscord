import '@/styles/module.css';

import NavigationServerList from '@/components/islets/navigation/nagivation-server-list';
import NavigationCreateServer from '@/components/islets/navigation/navigation-create-server';
import NavigationLogo from '@/components/islets/navigation/navigation-logo';
import { Separator } from '@/components/ui/Separator';
import { TooltipProvider } from '@/components/ui/Tooltip';

const Navigation = () => {
  return (
    <nav className="hideSpecificScrollbar fixed z-50 flex h-screen w-[70px] flex-col items-center overflow-y-auto bg-navigation pt-3">
      <TooltipProvider>
        <NavigationLogo />
        <Separator className="mx-auto mb-2 h-[2px] w-8" />
        <NavigationServerList />
        <NavigationCreateServer />
      </TooltipProvider>
    </nav>
  );
};

export default Navigation;
