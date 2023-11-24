import type { HTMLAttributes } from 'react';

type NavmenuBodyWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavmenuBodyWrapper = ({ ...props }: NavmenuBodyWrapperProps) => {
  return <div className="flex-1 overflow-y-auto" {...props} />;
};

export default NavmenuBodyWrapper;
