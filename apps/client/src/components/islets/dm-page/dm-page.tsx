import DmPageFriendLabel from '@/components/islets/dm-page/dm-page-friend-label';
import DmPageFriendList from '@/components/islets/dm-page/dm-page-friend-list';
import DMPageHeader from '@/components/islets/dm-page/dm-page-header';
import DmPageSearch from '@/components/islets/dm-page/dm-page-search';
import PageWrapper from '@/components/layout/channels-page/page-wrapper';

const DMPage = () => {
  return (
    <PageWrapper>
      <DMPageHeader />
      <DmPageSearch />
      <DmPageFriendLabel />
      <DmPageFriendList />
    </PageWrapper>
  );
};

export default DMPage;
