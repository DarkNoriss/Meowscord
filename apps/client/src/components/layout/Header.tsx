import Burger from '@/components/layout/navigation/Burger';
import FriendsFilter from '@/components/page/friends/FriendsFilter';
import { Separator } from '@/components/ui/Separator';

const Header = () => {
  return (
    <div className="flex h-12 items-center border-b-[1px] border-b-primary bg-background/20 p-2">
      <Burger />
      <div className="px-2 font-semibold text-primary-foreground">Friends</div>
      <Separator
        className="mx-2 h-6 rounded bg-muted-foreground/50"
        orientation="vertical"
      />
      <FriendsFilter />
    </div>
  );
};

export default Header;
