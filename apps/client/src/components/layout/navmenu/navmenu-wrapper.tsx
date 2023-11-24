import type { HTMLAttributes } from 'react';

type NavmenuWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavmenuWrapper = ({ ...props }: NavmenuWrapperProps) => {
  return (
    <div
      className="fixed left-[70px] z-10 flex h-screen w-60 flex-col bg-navigation-secondary"
      {...props}
    />
  );
};

export default NavmenuWrapper;
