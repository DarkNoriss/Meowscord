import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type FriendsFilterButtonType = {
  label: string;
  classes?: string;
};

const FriendsFilterButton = ({ label, classes }: FriendsFilterButtonType) => {
  return (
    <Button
      className={cn('h-6 mx-2 bg-none text-muted-foreground text-bol', classes)}
      variant="ghost"
    >
      {label}
    </Button>
  );
};

const FriendsFilter = () => {
  const filters = ['Online', 'All', 'Pending', 'Blocked'];

  return (
    <div className="flex">
      {filters.map((filter) => (
        <FriendsFilterButton key={filter} label={filter} />
      ))}
      <FriendsFilterButton label="Add Friend" classes="bg-green-700" />
    </div>
  );
};

export default FriendsFilter;
