import { auth } from '@clerk/nextjs';
import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { createServer } from '@/data-access/server';

const NavbarListItemAdd = () => {
  const { userId } = auth();

  if (!userId) return null;

  const handleClick = async () => {
    'use server';

    createServer(userId);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <form action={handleClick}>
          <Button
            className="m-0 mb-2 h-12 w-12 shrink-0 rounded-full bg-navigation-button p-0 text-green-600 hover:rounded-2xl hover:bg-navigation-button-hover hover:text-primary"
            type="submit"
          >
            <LuPlus size={24} />
          </Button>
        </form>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={15}>
        Add a server
      </TooltipContent>
    </Tooltip>
  );
};

export default NavbarListItemAdd;
