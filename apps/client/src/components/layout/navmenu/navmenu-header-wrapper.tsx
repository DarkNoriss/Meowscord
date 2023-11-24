import type { HTMLAttributes } from 'react';

type NavmenuHeaderWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavmenuHeaderWrapper = ({ ...props }: NavmenuHeaderWrapperProps) => {
  return (
    <div
      className="flex h-12 items-center border-b-2 border-navigation bg-navigation-secondary px-4 py-3"
      {...props}
    />
  );
};

export default NavmenuHeaderWrapper;
