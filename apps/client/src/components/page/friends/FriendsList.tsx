'use client';

import Image from 'next/image';

import Header from '@/components/layout/Header';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useAsideStore } from '@/stores/AsideStore';
import { useFiltersStore } from '@/stores/FiltersStore';
import { useFriendsStore } from '@/stores/FriendsStore';
import { useNavbarStore } from '@/stores/NavbarStore';
import { type UserType } from '@/types/user';

const FriendButton = ({ friendData }: { friendData: UserType }) => {
  const { avatar, name, status } = friendData;

  return (
    <div className="ml-[30px] mr-5 flex h-16 flex-1 flex-row">
      <div className="flex w-full flex-row items-center border-t border-white/10">
        <div className="mr-3 h-8 w-8 rounded-full">
          <Image
            className="rounded-full hover:rounded-2xl"
            src={avatar!}
            alt={name}
            height={64}
            width={64}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-primary-foreground">
            {name}
          </span>
          <span className="text-sm text-muted-foreground">
            {t(`user.status.${status}`)}
          </span>
        </div>
      </div>
      {/* <div>Buttons</div> */}
    </div>
  );
};

const FriendsList = () => {
  const navbarOpen = useNavbarStore((state) => state.open);
  const asideOpen = useAsideStore((state) => state.open);

  const friends = useFriendsStore((state) => state.friends);

  const filter = useFiltersStore((state) => state.filter);

  const renderFriends = () => {
    let label: string = '';
    let filteredFriends: UserType[] = [];

    switch (filter) {
      case 'Online': {
        if (friends)
          filteredFriends = friends
            ?.filter(
              (friend) =>
                friend.status !== 'offline' &&
                friend.status !== 'pending' &&
                friend.status !== 'blocked',
            )
            .sort((a, b) => a.name.localeCompare(b.name));

        if (filteredFriends.length === 0) {
          label = 'There are no online friends';
          break;
        }

        label = `ONLINE - ${filteredFriends.length}`;
        break;
      }

      case 'All': {
        if (friends)
          filteredFriends = friends
            ?.filter(
              (friend) =>
                friend.status !== 'pending' && friend.status !== 'blocked',
            )
            .sort((a, b) => a.name.localeCompare(b.name));

        if (filteredFriends.length === 0) {
          label = 'There are no friends';
          break;
        }

        label = `ALL FRIENDS - ${filteredFriends.length}`;
        break;
      }

      case 'Pending': {
        if (friends)
          filteredFriends = friends
            ?.filter((friend) => friend.status === 'pending')
            .sort((a, b) => a.name.localeCompare(b.name));

        if (filteredFriends.length === 0) {
          label = 'There are no pending friend requests';
          break;
        }

        label = `PENDING - ${filteredFriends.length}`;
        break;
      }
      case 'Blocked': {
        if (friends)
          filteredFriends = friends
            ?.filter((friend) => friend.status === 'blocked')
            .sort((a, b) => a.name.localeCompare(b.name));

        if (filteredFriends.length === 0) {
          label = 'There are no blocked friends';
          break;
        }

        label = `BLOCKED - ${filteredFriends.length}`;
        break;
      }
      case 'Add Friend': {
        if (filteredFriends.length === 0) {
          label = 'There are no friends to be added';
          break;
        }

        label = `ADD FRIEND - ${filteredFriends.length}`;
        break;
      }

      default: {
        break;
      }
    }

    return filteredFriends.length > 0 ? (
      <>
        <div className="ml-[30px] mr-5 mt-4 pb-2">
          <h2 className="text-xs font-semibold text-muted-foreground">
            {label}
          </h2>
        </div>
        <div className="mt-2 pb-2 pr-4">
          {filteredFriends?.map((friend) => (
            <FriendButton
              key={`friendButton-${friend.id}`}
              friendData={friend}
            />
          ))}
        </div>
      </>
    ) : (
      <div className="flex h-full items-center justify-center">
        <span className="text-xl text-muted-foreground">{label}</span>
      </div>
    );
  };

  return (
    <div
      className={cn(
        'z-10 flex flex-1 flex-col transition-[margin] duration-300 ease-linear',
        navbarOpen ? '' : '-ml-[calc(72px+232px)] sm:ml-0',
      )}
    >
      <Header />
      <div className="flex flex-1">
        <main className="flex flex-1 flex-row bg-background/20">
          <div className="flex-1 border-r border-white/10">
            {/* <div className="mb-2 ml-[30px] mr-5 mt-4">SEARCH BUTTON</div> */}
            {renderFriends()}
          </div>
          <aside className="w-[360px] p-4 pr-2">
            <h2 className="mb-4 mt-2 text-xl font-extrabold text-primary-foreground">
              Active Now
            </h2>
          </aside>
        </main>
        <aside
          className={cn(
            'bg-slate-900 transition-[width] duration-300 ease-linear',
            asideOpen ? 'w-[340px]' : 'w-0',
          )}
        />
      </div>
    </div>
  );
};

export default FriendsList;
