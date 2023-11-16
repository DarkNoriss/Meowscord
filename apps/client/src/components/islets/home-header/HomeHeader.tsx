import Link from 'next/link';

import Burger from '@/components/Burger';
import { Button } from '@/components/ui/Button';

const HomeHeader = () => {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-between">
      <div>logo</div>
      <div className="flex flex-row">
        <Link className="hover:border-none" href="/channels/me">
          <Button className="rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground">
            Open Meowscord
          </Button>
        </Link>
        <Burger />
      </div>
    </header>
  );
};

export default HomeHeader;
