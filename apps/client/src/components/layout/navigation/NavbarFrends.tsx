import DMList from '@/components/page/friends/DMList';
import { Button } from '@/components/ui/Button';

const NavbarFrends = () => {
  return (
    <nav className="flex w-60 flex-col">
      <div className="flex h-12 items-center border-b-[1px] border-b-primary bg-background/[0.15] px-[10px]">
        <Button className="h-7 w-full justify-start bg-gray-900 px-[6px] py-[1px] text-sm text-muted-foreground">
          Find or start a conversation
        </Button>
      </div>

      <DMList />
    </nav>
  );
};

export default NavbarFrends;
