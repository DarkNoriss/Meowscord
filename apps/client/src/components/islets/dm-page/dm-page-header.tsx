import { BsPersonFill } from 'react-icons/bs';

import DMPageHeaderFilterButton from '@/components/islets/dm-page/dm-page-header-filter';
import { Separator } from '@/components/ui/Separator';
import { type Filters } from '@/stores/filter-store';

const DMPageHeader = () => {
  const filters: Filters[] = [
    'Online',
    'All',
    'Pending',
    'Blocked',
    'Add Friend',
  ];

  return (
    <>
      <BsPersonFill className="mx-2 text-muted" size={24} />
      <span className="mr-2 text-base font-semibold text-primary">Friends</span>
      <Separator className="mx-2 h-6 w-[1px]" orientation="vertical" />
      <div className="flex">
        {filters.map((filter) => (
          <DMPageHeaderFilterButton key={filter} label={filter} />
        ))}
      </div>
    </>
  );
};

export default DMPageHeader;
