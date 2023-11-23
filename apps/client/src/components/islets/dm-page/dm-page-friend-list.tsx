'use client';

import { useQuery } from '@tanstack/react-query';

import type { UserType } from '@/types/user';

const DmPageFriendList = () => {
  const { data } = useQuery<UserType[]>({ queryKey: ['friends'] });

  return (
    <div className="mb-2 ml-[30px] mr-5 mt-4 h-full overflow-y-auto">
      {data?.map((friend) => <div key={friend.id}>{friend.fullName}</div>)}
    </div>
  );
};

export default DmPageFriendList;
