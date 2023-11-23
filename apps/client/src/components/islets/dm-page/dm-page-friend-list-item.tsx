import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Separator } from '@/components/ui/Separator';
import { t } from '@/lib/i18n';
import type { UserType } from '@/types/user';

type DMPageFriendListItemProps = {
  friendData: UserType;
};

const DMPageFriendListItem = ({ friendData }: DMPageFriendListItemProps) => {
  const { fullName, avatar, status } = friendData;

  return (
    <div className="ml-[30px] mr-5">
      <Separator className="w-full" />
      <div className="flex h-[62px] flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="mr-3">
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>{fullName}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <span className="truncate text-base font-semibold text-primary">
              {fullName}
            </span>
            <span className="truncate text-sm font-medium text-muted">
              {t(`user.status.${status}`)}
            </span>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default DMPageFriendListItem;
