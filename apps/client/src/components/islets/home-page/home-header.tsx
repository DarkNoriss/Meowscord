import { SignInButton } from '@clerk/nextjs';
import type { HTMLAttributes } from 'react';

// import Burger from '@/components/Burger';
import { Button } from '@/components/ui/Button';

type HomeHeaderProps = HTMLAttributes<HTMLElement>;

const HomeHeader = ({ ...props }: HomeHeaderProps) => {
  return (
    <header
      className="flex h-20 w-full flex-row items-center justify-between"
      {...props}
    >
      <div>logo</div>
      <div className="flex flex-row">
        <SignInButton mode="modal">
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
            Open Meowscord
          </Button>
        </SignInButton>
        {/* <Burger /> */}
      </div>
    </header>
  );
};

export default HomeHeader;
