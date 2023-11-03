import Logo from './Logo';
import Servers from './Servers';

const Navbar = () => {
  return (
    <nav className="flex w-[72px] flex-col items-center bg-background/10">
      <Logo />
      <Servers />
    </nav>
  );
};

export default Navbar;
