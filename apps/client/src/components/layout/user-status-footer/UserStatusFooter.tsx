import { currentUser } from '@clerk/nextjs';
import type { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';

type UserStatusFooterProps = {};

const UserStatusFooter: FC<UserStatusFooterProps> = async () => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className="bottom-0 flex h-[52px] flex-row items-center justify-between bg-footer px-2">
      <Button
        className="m-0 mr-2 flex w-full flex-row items-center justify-start p-0 pl-[2px]"
        variant="ghost"
      >
        <Avatar>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{user.username}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start py-1 pl-2">
          <span className="text-sm text-primary">{user.firstName}</span>
          <span className="text-xs text-muted">{user.username}</span>
        </div>
      </Button>
      <div>b</div>
    </div>
  );
};

export default UserStatusFooter;
