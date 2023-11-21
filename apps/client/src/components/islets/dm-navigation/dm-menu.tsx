import DMMenuItem from './dm-menu-item';

const DMMenu = () => {
  const menuItems = ['Friends', 'Nitro', 'Store'];

  return (
    <div className="flex w-full flex-col">
      {menuItems.map((item) => (
        <DMMenuItem key={`menu-item-${item}`} label={item} />
      ))}
    </div>
  );
};

export default DMMenu;
