import type { HTMLAttributes } from 'react';

type NavbarWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavbarWrapper = ({ ...props }: NavbarWrapperProps) => {
  return (
    <nav
      className="hideSpecificScrollbar fixed z-50 flex h-screen w-[70px] flex-col items-center overflow-y-auto bg-navigation pt-3"
      {...props}
    />
  );
};

export default NavbarWrapper;
