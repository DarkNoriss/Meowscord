import { PlusIcon } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '@/components/ui/Button';

type AddServerProps = {};

const AddServer: FC<AddServerProps> = () => {
  return (
    <Button className="m-0 h-12 w-12 rounded-full bg-navigation-button p-0 text-green-600 hover:rounded-2xl hover:bg-navigation-button-hover hover:text-primary">
      <PlusIcon />
    </Button>
  );
};

export default AddServer;
