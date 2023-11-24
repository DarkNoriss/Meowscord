import NavmenuHeaderWrapper from '@/components/layout/navmenu/navmenu-header-wrapper';

type ChannelNavmenuHeaderProps = {
  name: string;
};

const ChannelNavmenuHeader = ({ name }: ChannelNavmenuHeaderProps) => {
  return <NavmenuHeaderWrapper>{name}</NavmenuHeaderWrapper>;
};

export default ChannelNavmenuHeader;
