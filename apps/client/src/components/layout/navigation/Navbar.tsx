import NavbarCreateServer from '@/components/layout/navigation/NavbarCreateServer';
import NavbarLogo from '@/components/layout/navigation/NavbarLogo';
import NavbarServers from '@/components/layout/navigation/NavbarServers';

const Navbar = () => {
  return (
    <nav className="fixed flex h-screen w-[72px] flex-col items-center overflow-y-auto bg-background/10 pt-3">
      <NavbarLogo />
      <NavbarServers />
      <NavbarCreateServer />
    </nav>
  );
};

export default Navbar;
