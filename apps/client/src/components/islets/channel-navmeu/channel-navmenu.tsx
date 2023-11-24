import NavmenuWrapper from '@/components/layout/navmenu/navmenu-wrapper';
import type { ServerType } from '@/types/server';

import ChannelNavmenuHeader from './channel-navmenu-header';

type ChannelNavmenuProps = {
  channelData: ServerType;
};

const ChannelNavmenu = ({ channelData }: ChannelNavmenuProps) => {
  const { name } = channelData;

  return (
    <NavmenuWrapper>
      <ChannelNavmenuHeader name={name} />
    </NavmenuWrapper>
  );
};

export default ChannelNavmenu;
