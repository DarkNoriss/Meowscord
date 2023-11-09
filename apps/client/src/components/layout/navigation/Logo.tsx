import NavbarServer from '@/components/layout/navigation/NavbarServer';
import { Separator } from '@/components/ui/Separator';

const Logo = () => {
  return (
    <>
      <NavbarServer
        href="/channels/me"
        tooltipContent="Direct Messages"
        image={{ alt: 'Meowscord logo', src: '/logo.jpg' }}
      />
      <Separator className="mb-2 h-[2px] w-8 bg-muted-foreground" />
    </>
  );
};

export default Logo;
