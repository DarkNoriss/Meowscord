import { Separator } from '@/components/ui/Separator';

import Server from './Server';

const NavbarLogo = () => {
  return (
    <li>
      <Server
        href="/channels/me"
        image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      />
      <Separator className="mx-auto mb-2 h-[2px] w-8 rounded-full bg-muted-foreground/25" />
    </li>
  );
};

export default NavbarLogo;
