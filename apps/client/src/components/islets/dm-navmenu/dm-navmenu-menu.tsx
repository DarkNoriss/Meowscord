import DMNavmenuMenuItem from './dm-navmenu-menu-item';

const DMNavmenuMenu = () => {
  const menuItems = ['Friends', 'Nitro', 'Store'];

  return (
    <div className="flex w-full flex-col">
      {menuItems.map((item) => (
        <DMNavmenuMenuItem key={`menu-item-${item}`} label={item} />
      ))}
    </div>
  );
};

export default DMNavmenuMenu;
