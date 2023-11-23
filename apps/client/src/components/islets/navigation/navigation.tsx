import '@/styles/module.css';

import NavigationServerList from '@/components/islets/navigation/nagivation-server-list';
import NavigationCreateServer from '@/components/islets/navigation/navigation-create-server';
import NavigationLogo from '@/components/islets/navigation/navigation-logo';

const Navigation = () => {
  return (
    <nav className="hideSpecificScrollbar fixed flex h-screen w-[72px] flex-col items-center overflow-y-auto bg-navigation pt-3">
      <ul>
        <NavigationLogo />
        <NavigationServerList />
        <NavigationCreateServer />
      </ul>
    </nav>
  );
};

export default Navigation;
