import { LuPlus } from 'react-icons/lu';

import DMNavigationFriendListItem from '@/components/islets/dm-navigation/dm-navigation-friend-list-item';
import { generateFakeFriends } from '@/lib/mock';
import type { UserType } from '@/types/user';

const getData = () => {
  const friends = generateFakeFriends(40);
  return { friends };
};

const DMNavigationFriendsList = () => {
  const { friends } = getData();

  return (
    <>
      <div className="flex justify-between pb-1 pl-[16px] pr-2 pt-[16px] text-muted hover:text-primary">
        <span className="text-xs">DIRECT MESSAGES</span>
        <LuPlus size={16} />
      </div>
      <ul>
        {friends.map((friend: UserType) => (
          <li key={friend.id}>
            <DMNavigationFriendListItem friendData={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DMNavigationFriendsList;
