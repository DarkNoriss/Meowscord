import type { ImageProps } from 'next/image';
import Image from 'next/image';

type ProfileAvatarProps = ImageProps;

const ProfileAvatar = ({ ...props }: ProfileAvatarProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image className="h-8 w-8 rounded-full" height={32} width={32} {...props} />
  );
};

export default ProfileAvatar;
