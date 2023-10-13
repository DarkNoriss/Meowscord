import Link from 'next/link';

import { Button } from '@/components/ui/Button';

const Page = () => {
  return (
    <div className="container flex h-screen items-center justify-center">
      <Link href="/channels/me">
        <Button size="lg">LINK TO CHANNEL ME</Button>
      </Link>
    </div>
  );
};

export default Page;
