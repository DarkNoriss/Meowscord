'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { Filters } from '@/stores/filter-store';
import { useFriendFiltersStore } from '@/stores/filter-store';

type DMPageHeaderFilterButtonProps = {
  label: Filters;
  className?: string;
};

const DMPageHeaderFilterButton = ({
  label,
  className,
}: DMPageHeaderFilterButtonProps) => {
  const filter = useFriendFiltersStore((state) => state.filter);
  const setFilter = useFriendFiltersStore((state) => state.setFilter);

  const handleOnClick = () => {
    if (filter === 'add friend' && label === 'add friend') return;
    setFilter(label);
  };

  const baseClasses =
    'h-6 mx-2 text-base px-2 font-medium hover:text-primary hover:bg-button-hover/25 capitalize';

  const isActive = filter === label;
  const isAddFriend = label === 'add friend';

  const activeClass = isActive
    ? 'bg-button-hover/60 cursor-default'
    : 'text-muted';
  const addFriendClass = isAddFriend
    ? 'bg-green-600/50 text-primary hover:bg-green-600/50'
    : '';
  const activeAddFriendClass =
    isAddFriend && isActive
      ? 'bg-transparent text-green-500 cursor-default hover:bg-transparent hover:text-green-500'
      : '';

  return (
    <Button
      className={cn(
        baseClasses,
        className,
        activeClass,
        addFriendClass,
        activeAddFriendClass,
      )}
      variant="ghost"
      onClick={handleOnClick}
    >
      {label}
    </Button>
  );
};

export default DMPageHeaderFilterButton;
