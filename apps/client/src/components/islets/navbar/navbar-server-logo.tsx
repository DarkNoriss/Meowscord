import NavbarServerItem from '@/components/islets/navbar/navbar-server-item';

const NavbarServerLogo = () => {
  return (
    <NavbarServerItem
      href="/channels/me"
      image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      toltipcontent="Direct Messages"
    />
  );
};

export default NavbarServerLogo;
