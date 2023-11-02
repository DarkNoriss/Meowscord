import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { Filters } from '@/stores/FiltersStore';
import { useFiltersStore } from '@/stores/FiltersStore';

type FriendsFilterButtonType = {
  label: Filters;
  classes?: string;
};

const FriendsFilterButton = ({ label, classes }: FriendsFilterButtonType) => {
  const filter = useFiltersStore((state) => state.filter);
  const setFilter = useFiltersStore((state) => state.setFilter);

  const handleOnClick = () => {
    if (filter === 'Add Friend' && label === 'Add Friend') return;
    setFilter(label);
  };

  return (
    <Button
      className={cn(
        'h-6 mx-2 text-base px-2 font-medium hover:bg-muted-foreground/50 hover:text-muted',
        classes,
        filter === label ? 'bg-muted-foreground/50 ' : 'text-muted-foreground',
        label === 'Add Friend'
          ? 'bg-green-700 text-muted hover:bg-green-700'
          : '',
        label === 'Add Friend' && filter === label
          ? 'bg-transparent text-green-600 cursor-default hover:bg-transparent hover:text-green-600'
          : '',
      )}
      variant="ghost"
      onClick={handleOnClick}
    >
      {label}
    </Button>
  );
};

const FriendsFilter = () => {
  const filters: Filters[] = [
    'Online',
    'All',
    'Pending',
    'Blocked',
    'Add Friend',
  ];

  return (
    <div className="flex">
      {filters.map((filter) => (
        <FriendsFilterButton key={filter} label={filter} />
      ))}
    </div>
  );
};

export default FriendsFilter;
