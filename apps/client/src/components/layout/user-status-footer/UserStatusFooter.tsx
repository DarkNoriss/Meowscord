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

const UserStatusFooter = async () => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className="bottom-0 flex h-[52px] flex-row items-center justify-between bg-popover px-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="m-0 mr-2 flex w-full flex-row items-center justify-start p-0 pl-[2px]"
            variant="ghost"
          >
            <Avatar>
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>{user.username}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start py-1 pl-2">
              <span className="text-sm text-primary">{`${user.firstName} ${user.lastName}`}</span>
              <span className="text-xs text-muted">{user.username}</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mb-4 h-[590px] w-[348px] p-1">
          <DropdownMenuLabel>
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>{user.username}</AvatarFallback>
            </Avatar>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <span>{user.username}</span>
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
      <div>b</div>
    </div>
  );
};

export default UserStatusFooter;
