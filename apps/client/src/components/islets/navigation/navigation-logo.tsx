import NavigationServer from '@/components/islets/navigation/navigation-server';

const NavigationLogo = () => {
  return (
    <NavigationServer
      href="/channels/me"
      image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      toltipcontent="Direct Messages"
    />
  );
};

export default NavigationLogo;
