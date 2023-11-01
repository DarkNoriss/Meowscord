import Image from 'next/image';
import type { FC } from 'react';

import type { UserType } from '@/types/user';

type DMFriendProps = {
  frienddata: UserType;
};

const DMFriend: FC<DMFriendProps> = ({ frienddata }) => {
  const { name, avatar } = frienddata;

  return (
    <div className="flex h-[42px] items-center px-3 py-1">
      <div className="shrink-0">
        <Image
          className="mr-3 h-8 w-8 rounded-full"
          src={avatar!}
          height={32}
          width={32}
          alt={name}
        />
      </div>

      <span className="truncate text-base text-muted-foreground">{name}</span>
    </div>
  );
};

export default DMFriend;
