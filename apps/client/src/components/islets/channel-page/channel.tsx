import ChannelHeader from '@/components/islets/channel-page/channel-header';
import ChannelBodyWrapper from '@/components/layout/channel/channel-body-wrapper';
import ChannelHeaderWrapper from '@/components/layout/channel/channel-header-wrapper';
import ChannelWrapper from '@/components/layout/channel/channel-wrapper';

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
