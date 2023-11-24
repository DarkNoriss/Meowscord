'use client';

import { useQuery } from '@tanstack/react-query';
import { LuPlus } from 'react-icons/lu';

import DMNavmenuFriendListItem from '@/components/islets/dm-navmenu/dm-navmenu-friend-list-item';
import type { UserType } from '@/types/user';

const DMNavmenuFriendsList = () => {
  const { data } = useQuery<UserType[]>({ queryKey: ['friends'] });

  return (
    <>
      <div className="flex justify-between pb-1 pl-[16px] pr-2 pt-[16px] text-muted hover:text-primary">
        <span className="text-xs">DIRECT MESSAGES</span>
        <LuPlus size={16} />
      </div>
      <ul>
        {data?.map((friend: UserType) => (
          <li key={friend.id}>
            <DMNavmenuFriendListItem friendData={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DMNavmenuFriendsList;
