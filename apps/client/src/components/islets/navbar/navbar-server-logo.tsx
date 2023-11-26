import NavbarServerListItem from '@/components/islets/navbar/navbar-server-list-item';

const NavbarServerLogo = () => {
  return (
    <NavbarServerListItem
      href="/channels/me"
      image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      toltipcontent="Direct Messages"
    />
  );
};

export default NavbarServerLogo;
