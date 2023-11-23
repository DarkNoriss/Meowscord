'use client';

import { useQuery } from '@tanstack/react-query';
import { LuPlus } from 'react-icons/lu';

import DMNavigationFriendListItem from '@/components/islets/dm-navigation/dm-navigation-friend-list-item';
import type { UserType } from '@/types/user';

const DMNavigationFriendsList = () => {
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
            <DMNavigationFriendListItem friendData={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DMNavigationFriendsList;
