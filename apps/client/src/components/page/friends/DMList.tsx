'use client';

import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useFriendsStore } from '@/stores/FriendsStore';

import DMFriend from './DMFriend';

const DMList = () => {
  const pathname = usePathname();
  const friends = useFriendsStore((state) => state.friendsList);

  const isCurrentlyActive = (page: string) => pathname === `/${page}`;

  return (
    <div className="flex-1 bg-gray-800 p-2">
      <div className="flex flex-col gap-1">
        <Button
          className={cn(
            'justify-start',
            isCurrentlyActive('channels/me') ? 'bg-gray-700' : 'bg-gray-800',
          )}
        >
          <span className="text-base">Friends</span>
        </Button>
        <Button
          className={cn(
            'justify-start',
            isCurrentlyActive('store') ? 'bg-gray-700' : 'bg-gray-800',
          )}
        >
          <span className="text-base">Nitro</span>
        </Button>
      </div>
      <div className="flex justify-between pb-1 pl-[16px] pr-2 pt-[16px] text-muted-foreground hover:text-primary-foreground">
        <span className="text-xs">DIRECT MESSAGES</span>
        <Plus size={16} />
      </div>
      <div>
        {friends.map((friend) => (
          <DMFriend key={friend.id} frienddata={friend} />
        ))}
      </div>
    </div>
  );
};

export default DMList;
