import DMPageFriendList from '@/components/islets/dm-page/dm-page-friend-list';
import DMPageHeader from '@/components/islets/dm-page/dm-page-header';
import PageWrapper from '@/components/layout/channels-page/page-wrapper';

const DMPage = () => {
  return (
    <PageWrapper>
      <DMPageHeader />
      <DMPageFriendList />
    </PageWrapper>
  );
};

export default DMPage;
