import type { FC, HTMLAttributes } from 'react';

type HeaderProps = HTMLAttributes<HTMLDivElement>;

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <div className="h-12 items-center bg-background/20" {...props} />;
};

export default Header;
