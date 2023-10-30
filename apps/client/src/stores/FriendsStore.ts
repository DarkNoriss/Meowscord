import { create } from 'zustand';

import { generateFakeFriends } from '@/lib/mock';
import type { UserType } from '@/types/user';

type FriendsStoreType = {
  friendsList: UserType[];
};

export const useFriendsStore = create<FriendsStoreType>(() => ({
  friendsList: generateFakeFriends(),
}));
