import { Cat } from 'lucide-react';

import { Separator } from '@/components/ui/Separator';

const Logo = () => {
  return (
    <div className="mb-2 pt-3">
      {/* <div className="h-12 w-12 rounded-2xl bg-slate-50" /> */}
      <Cat size={48} className="mb-2 pt-3 " />
      <Separator />
    </div>
  );
};

export default Logo;
