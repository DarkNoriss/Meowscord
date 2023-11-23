'use client';

import { useQuery } from '@tanstack/react-query';

import DMPageFriendListItem from '@/components/islets/dm-page/dm-page-friend-list-item';
import DMPageFriendListLabel from '@/components/islets/dm-page/dm-page-friend-list-label';
import DmPageFriendSearch from '@/components/islets/dm-page/dm-page-friend-search';
import { useFriendFiltersStore } from '@/stores/filter-store';
import { type UserType } from '@/types/user';

const filterFunctions = {
  Online: (friend: UserType) =>
    friend.status !== 'offline' &&
    friend.status !== 'pending' &&
    friend.status !== 'blocked',
  All: (friend: UserType) =>
    friend.status !== 'pending' && friend.status !== 'blocked',
  Pending: (friend: UserType) => friend.status === 'pending',
  Blocked: (friend: UserType) => friend.status === 'blocked',
  'Add Friend': () => false,
};

const DMPageFriendList = () => {
  const { data } = useQuery<UserType[]>({ queryKey: ['friends'] });
  const filter = useFriendFiltersStore((state) => state.filter);

  if (!data) return null;

  const filterFunction = filterFunctions[filter];

  const filteredData: UserType[] =
    data
      ?.filter(filterFunction)
      .sort((a, b) => a.fullName.localeCompare(b.fullName)) ?? [];

  return (
    <>
      <DmPageFriendSearch />
      <DMPageFriendListLabel count={filteredData.length} />
      <div className="mt-2 h-full overflow-y-auto pb-2">
        {filteredData.map((friend: UserType) => (
          <DMPageFriendListItem friendData={friend} key={friend.id} />
        ))}
      </div>
    </>
  );
};

export default DMPageFriendList;
