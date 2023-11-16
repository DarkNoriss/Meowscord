import { Separator } from '@/components/ui/Separator';

import Server from './Server';

const NavbarLogo = () => {
  return (
    <>
      <Server
        href="/channels/me"
        image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      />
      <Separator className="mb-2 h-[2px] w-8 bg-muted-foreground" />
    </>
  );
};

export default NavbarLogo;
