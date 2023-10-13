import Burger from '@/components/Burger';
import FriendsFilter from '@/components/FriendsFilter';
import { Separator } from '@/components/ui/Separator';

const Header = () => {
  return (
    <div className="flex h-12 items-center border-b-[1px] border-b-primary bg-gray-700 p-2">
      <Burger />
      <div className="px-2">Friends</div>
      <Separator
        className="mx-2 h-6 rounded bg-muted-foreground"
        orientation="vertical"
      />
      <FriendsFilter />
    </div>
  );
};

export default Header;
