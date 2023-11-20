import DMPageHeader from '@/components/islets/dm-page/dm-page-header';
import PageHeaderWrapper from '@/components/layout/page/page-header-wrapper';
import PageWrapper from '@/components/layout/page/page-wrapper';

const DMPage = () => {
  return (
    <PageWrapper>
      <PageHeaderWrapper>
        <DMPageHeader />
      </PageHeaderWrapper>
    </PageWrapper>
  );
};

export default DMPage;
