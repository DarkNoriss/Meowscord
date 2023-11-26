import NavbarListItem from '@/components/islets/navbar/navbar-list-item';

const NavbarServerItemLogo = () => {
  return (
    <NavbarListItem
      href="/channels/me"
      image={{ alt: 'Meowscord logo', src: '/logo.jpg', priority: true }}
      toltipcontent="Direct Messages"
    />
  );
};

export default NavbarServerItemLogo;
