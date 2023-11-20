import { BsPersonFill } from 'react-icons/bs';

import PageHeaderWrapper from '@/components/layout/page/PageHeaderWrapper';
import PageWrapper from '@/components/layout/page/PageWrapper';
import { Separator } from '@/components/ui/Separator';

const DMPage = () => {
  return (
    <PageWrapper>
      <PageHeaderWrapper>
        <BsPersonFill className="mx-2 text-muted" size={24} />
        <span className="mr-2 text-base font-semibold text-primary">
          Friends
        </span>
        <Separator className="mx-2 h-6 w-[1px]" orientation="vertical" />
      </PageHeaderWrapper>
    </PageWrapper>
  );
};

export default DMPage;
