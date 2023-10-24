import Logo from './Logo';
import Servers from './Servers';

const Navbar = () => {
  return (
    <nav className="flex w-[72px] flex-col items-center bg-primary">
      <Logo />
      <Servers />
    </nav>
  );
};

export default Navbar;
