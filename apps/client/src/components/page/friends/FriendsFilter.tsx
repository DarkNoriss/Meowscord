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
    setFilter(label);
  };

  return (
    <Button
      className={cn(
        'h-6 mx-1 bg-none text-muted-foreground text-bol px-2',
        classes,
        filter === label ? 'bg-secondary/90 text-secondary-foreground' : '',
        label === 'Add Friend' ? 'bg-green-700 hover:bg-green-700' : '',
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
