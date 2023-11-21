import { currentUser } from '@clerk/nextjs';

import LogoutButton from '@/components/LogoutButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

const UserStatusFooterDropdown = async () => {
  const user = await currentUser();

  if (!user) return null;

  const { firstName, lastName, username, imageUrl } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="m-0 mr-2 flex w-full flex-row items-center justify-start p-0 pl-[2px]"
          variant="ghost"
        >
          <Avatar>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start py-1 pl-2">
            <span className="text-sm text-primary">{`${firstName} ${lastName}`}</span>
            <span className="text-xs text-muted">{username}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mb-4 h-[590px] w-[348px] p-1">
        <DropdownMenuLabel>
          <Avatar className="h-20 w-20">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <span>{`${firstName} ${lastName}`}</span>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <span>{username}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <span>MEOWSCORD MEMBER SINCE</span>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <span>09.11.2020</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Online</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Online</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Idle</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Do Not Disturb</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Invisible</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <span>Set Custom Status</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutButton />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Copy User ID</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserStatusFooterDropdown;
