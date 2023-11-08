import Logo from '@/components/layout/navigation/Logo';
import NavbarServers from '@/components/layout/navigation/NavbarServers';

const Navbar = () => {
  return (
    <nav className="fixed flex h-screen w-[72px] flex-col items-center overflow-y-auto bg-background/10 pt-3">
      <Logo />
      <NavbarServers />
    </nav>
  );
};

export default Navbar;
