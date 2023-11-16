'use client';

import { PlusIcon } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';

type AddServerProps = {};

const AddServer: FC<AddServerProps> = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      className="m-0 h-12 w-12 rounded-full bg-navigation-button p-0 hover:rounded-2xl hover:bg-navigation-button-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PlusIcon color={hovered ? '#FFFFFF' : '#23A559'} />
    </Button>
  );
};

export default AddServer;
