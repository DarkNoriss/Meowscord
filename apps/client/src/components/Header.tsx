import Burger from '@/components/Burger';

import FriendProfile from './FriendProfile';

const Header = () => {
  return (
    <div className="flex h-12 items-center bg-gray-700 p-2">
      <Burger />
      <FriendProfile />
    </div>
  );
};

export default Header;
