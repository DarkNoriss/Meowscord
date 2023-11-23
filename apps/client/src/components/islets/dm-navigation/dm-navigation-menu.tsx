import DMNavigationMenuItem from './dm-navigation-menu-item';

const DMNavigationMenu = () => {
  const menuItems = ['Friends', 'Nitro', 'Store'];

  return (
    <div className="flex w-full flex-col">
      {menuItems.map((item) => (
        <DMNavigationMenuItem key={`menu-item-${item}`} label={item} />
      ))}
    </div>
  );
};

export default DMNavigationMenu;
