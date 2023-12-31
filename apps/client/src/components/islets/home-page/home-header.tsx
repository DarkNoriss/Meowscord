import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
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
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
              Open Meowscord
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link className="hover:border-none" href="/channels/me">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
              Open Meowscord
            </Button>
          </Link>
        </SignedIn>
        {/* <Burger /> */}
      </div>
    </header>
  );
};

export default HomeHeader;
