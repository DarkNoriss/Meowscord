import { Button } from '@/components/ui/Button';

const SearchModal = () => {
  return (
    <Button className="h-7 w-full justify-start bg-navigation px-[6px] py-[1px] hover:bg-navigation">
      <span className="text-sm text-muted">Find or start a conversation</span>
    </Button>
  );
};

export default SearchModal;
