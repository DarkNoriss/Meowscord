'use client';

import axios from 'axios';
import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

const NavbarServerListItemMigrate = () => {
  const migrate = async () => {
    await axios.post('/api/migrate');
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="m-0 mb-2 h-12 w-12 shrink-0 rounded-full bg-navigation-button p-0 text-green-600 hover:rounded-2xl hover:bg-navigation-button-hover hover:text-primary"
          onClick={migrate}
        >
          <LuPlus size={24} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={15}>
        Migrate
      </TooltipContent>
    </Tooltip>
  );
};

export default NavbarServerListItemMigrate;
