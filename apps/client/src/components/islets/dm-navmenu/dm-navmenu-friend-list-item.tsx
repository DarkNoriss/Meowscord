// import Image from 'next/image';

import type { UserType } from '@/types/user';

type DMNavmenuFriendListItemProps = { friendData: UserType };

const DMNavmenuFriendListItem = ({
  friendData,
}: DMNavmenuFriendListItemProps) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { avatar, fullName } = friendData;

  return (
    <div className="flex h-[42px] items-center px-3 py-1">
      <div className="mr-3 h-8 w-8 shrink-0 rounded-full bg-navigation-button">
        {/* <Image
          className="rounded-full"
          src={avatar}
          height={32}
          width={32}
          alt={fullName}
        /> */}
      </div>
      <span className="truncate text-base text-muted">{fullName}</span>
    </div>
  );
};

export default DMNavmenuFriendListItem;