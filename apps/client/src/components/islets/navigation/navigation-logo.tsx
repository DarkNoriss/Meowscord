import NavigationServer from '@/components/islets/navigation/navigation-server';
import { Separator } from '@/components/ui/Separator';

const NavigationLogo = () => {
  return (
    <li>
      <NavigationServer
        href="/channels/me"
        image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      />
      <Separator className="mx-auto mb-2 h-[2px] w-8" />
    </li>
  );
};

export default NavigationLogo;
