import Image from 'next/image';
import type { FC } from 'react';

import type { UserType } from '@/types/user';

type DMFriendProps = {
  frienddata: UserType;
};

const DMFriend: FC<DMFriendProps> = ({ frienddata }) => {
  const { username, avatar } = frienddata;

  return (
    <div className="flex h-[42px] items-center py-1">
      <div className="pl-3">
        <Image
          className="mr-2 rounded-full"
          src={avatar!}
          height={32}
          width={32}
          alt={`${username}`}
        />
      </div>

      <span className="truncate text-base text-muted-foreground">
        {username}
      </span>
    </div>
  );
};

export default DMFriend;
