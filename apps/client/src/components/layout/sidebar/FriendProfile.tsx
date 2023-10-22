import { User2 } from 'lucide-react';

import { useAsideStore } from '@/stores/AsideStore';

const FriendProfile = () => {
  const toggleAside = useAsideStore((state) => state.toggleOpen);

  return (
    <button
      className="h-full rounded active:bg-gray-600"
      type="button"
      onClick={toggleAside}
    >
      <User2 className="mx-1" color="#9ca3af" />
    </button>
  );
};

export default FriendProfile;
