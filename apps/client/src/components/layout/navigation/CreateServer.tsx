import type { FC } from 'react';

import { Button } from '@/components/ui/Button';

type AddServerProps = {};

const AddServer: FC<AddServerProps> = () => {
  return (
    <Button className="m-0 h-12 w-12 rounded-full bg-button p-0 hover:rounded-2xl hover:bg-button-hover" />
  );
};

export default AddServer;
