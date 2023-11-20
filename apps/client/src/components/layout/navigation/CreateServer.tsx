import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/Button';

const AddServer = () => {
  return (
    <Button className="m-0 h-12 w-12 rounded-full bg-navigation-button p-0 text-green-600 hover:rounded-2xl hover:bg-navigation-button-hover hover:text-primary">
      <LuPlus size={24} />
    </Button>
  );
};

export default AddServer;
