'use client';

import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from '@/components/ui/Button';
import { generateFakeFriends } from '@/lib/mock';
import { cn } from '@/lib/utils';
import { useFriendsStore } from '@/stores/FriendsStore';

import DMFriend from './DMFriend';

const DMList = () => {
  const pathname = usePathname();
  const friends = useFriendsStore((state) => state.friends);
  const setFriends = useFriendsStore((state) => state.setFriends);

  const isCurrentlyActive = (page: string) => pathname === `/${page}`;

  useEffect(() => {
    setFriends(generateFakeFriends());
  }, [setFriends]);

  const renderButtons = () => {
    const buttons = ['Friends', 'Nitro', 'Store'];

    return buttons.map((button) => {
      let isActive = false;
      switch (button) {
        case 'Friends': {
          if (isCurrentlyActive('channels/me')) isActive = true;
          break;
        }
        default: {
          break;
        }
      }

      return (
        <Button
          className={cn('justify-start')}
          key={`button-${button}`}
          variant="ghost"
        >
          <span
            className={
              (cn('text-base '),
              isActive ? 'text-primary-foreground' : 'text-muted-foreground')
            }
          >
            {button}
          </span>
        </Button>
      );
    });
  };

  return (
    <div className="flex-1 bg-background/[0.15] p-2">
      <div className="flex flex-col gap-1">{renderButtons()}</div>
      <div className="flex justify-between pb-1 pl-[16px] pr-2 pt-[16px] text-muted-foreground hover:text-primary-foreground">
        <span className="text-xs">DIRECT MESSAGES</span>
        <Plus size={16} />
      </div>
      <div>
        {friends?.map((friend) => (
          <DMFriend key={friend.id} frienddata={friend} />
        ))}
      </div>
    </div>
  );
};

export default DMList;
