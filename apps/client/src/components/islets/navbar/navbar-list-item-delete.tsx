'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { LuMinus } from 'react-icons/lu';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

const NavbarListItemDelete = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post('/api/servers/delete');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servers'] });
    },
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="m-0 mb-2 h-12 w-12 shrink-0 rounded-full bg-navigation-button p-0 text-green-600 hover:rounded-2xl hover:bg-navigation-button-hover hover:text-primary"
          type="submit"
          onClick={() => mutation.mutate()}
        >
          <LuMinus size={24} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={15}>
        Delete a server
      </TooltipContent>
    </Tooltip>
  );
};

export default NavbarListItemDelete;