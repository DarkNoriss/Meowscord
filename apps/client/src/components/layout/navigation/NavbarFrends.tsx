import { Button } from '@/components/ui/Button';

const NavbarFrends = () => {
  return (
    <nav className="flex w-[232px] flex-col">
      <div className="flex h-12 items-center justify-center border-b-[1px] border-b-primary bg-gray-800 px-[10px]">
        <Button className="h-7 w-full bg-gray-900 px-[6px] py-[1px] text-sm text-muted-foreground">
          Find or start a conversation
        </Button>
      </div>
      <div className="flex-1 bg-gray-800" />
    </nav>
  );
};

export default NavbarFrends;
