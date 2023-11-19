import ChannelBodyWrapper from '@/components/layout/channel/ChannelBodyWrapper';
import ChannelHeaderWrapper from '@/components/layout/channel/ChannelHeaderWrapper';
import ChannelWrapper from '@/components/layout/channel/ChannelWrapper';

import ChannelHeader from './ChannelHeader';

const ChannelPage = () => {
  return (
    <ChannelWrapper>
      <ChannelHeaderWrapper>
        <ChannelHeader />
      </ChannelHeaderWrapper>
      <ChannelBodyWrapper>
        <div />
      </ChannelBodyWrapper>
    </ChannelWrapper>
  );
};

export default ChannelPage;
