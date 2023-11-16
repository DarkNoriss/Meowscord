import { currentUser } from '@clerk/nextjs';
import type { FC } from 'react';

import ProfileAvatar from '@/components/ProfileAvatar';

type UserStatusFooterProps = {};

const UserStatusFooter: FC<UserStatusFooterProps> = async () => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className="bottom-0 flex h-[52px] flex-row justify-between bg-footer px-2">
      <div className="flex flex-row items-center ">
        <ProfileAvatar src={user.imageUrl} alt={user.username!} />
        <div className="flex flex-col py-1 pl-2">
          <span>
            {user.firstName} {user.firstName}
          </span>
          <span>{user.username}</span>
        </div>
      </div>
      <div>b</div>
    </div>
  );
};

export default UserStatusFooter;
