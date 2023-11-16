import AddServer from '@/components/layout/navigation/CreateServer';
import Logo from '@/components/layout/navigation/Logo';
import Servers from '@/components/layout/navigation/Servers';

const Navigation = () => {
  return (
    <nav className="fixed flex h-screen w-[72px] flex-col items-center overflow-y-auto bg-navigation pt-3">
      <ul>
        <Logo />
        <Servers />
        <AddServer />
      </ul>
    </nav>
  );
};

export default Navigation;
