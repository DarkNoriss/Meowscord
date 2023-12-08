'use client';

import { useQuery } from '@tanstack/react-query';

import DMPageFriendListItem from '@/components/islets/dm-page/dm-page-friend-list-item';
import DMPageFriendListLabel from '@/components/islets/dm-page/dm-page-friend-list-label';
import DMPageFriendSearch from '@/components/islets/dm-page/dm-page-friend-search';
import { useFriendFiltersStore } from '@/stores/filter-store';
import type { User } from '@/types/user';

const DMPageFriendList = () => {
  const { data } = useQuery<User[]>({ queryKey: ['friends'] });
  const filter = useFriendFiltersStore((state) => state.filter);

  if (!data) return null;

  const filteredData = data.filter((friend: User) => {
    return (
      filter === 'all' || (filter === 'online' && friend.status !== 'offline')
    );
  });

  const sortedData: User[] =
    filteredData.sort((a, b) => a.username.localeCompare(b.username)) ?? [];

  return (
    <>
      <DMPageFriendSearch />
      <DMPageFriendListLabel count={sortedData.length} />
      <div className="mt-2 h-full overflow-y-auto pb-2">
        {sortedData.map((friend: User) => (
          <DMPageFriendListItem friendData={friend} key={friend.id} />
        ))}
      </div>
    </>
  );
};

export default DMPageFriendList;
