import type { FC } from 'react';

import { Button } from '@/components/ui/Button';

type NavbarCreateServerProps = {};

const NavbarCreateServer: FC<NavbarCreateServerProps> = () => {
  return (
    <Button className="m-0 h-12 w-12 rounded-full bg-background/20 p-0 hover:rounded-2xl hover:bg-background/20" />
  );
};

export default NavbarCreateServer;
