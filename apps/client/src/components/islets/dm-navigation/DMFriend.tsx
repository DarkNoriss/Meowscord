import Image from 'next/image';

import type { UserType } from '@/types/user';

type DMFriendProps = {
  friendData: UserType;
};

const DMFriend = ({ friendData }: DMFriendProps) => {
  const { avatar, fullName } = friendData;

  return (
    <div className="flex h-[42px] items-center px-3 py-1">
      <div className="shrink-0">
        <Image
          className="mr-3 h-8 w-8 rounded-full"
          src={avatar!}
          height={32}
          width={32}
          alt={fullName}
        />
      </div>
      <span className="truncate text-base text-muted">{fullName}</span>
    </div>
  );
};

export default DMFriend;
