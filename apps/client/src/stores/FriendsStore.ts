import { create } from 'zustand';

import type { User } from '@/types/user';

type FriendsStoreType = {
  friends: null | User[];
  setFriends: (friends: User[]) => void;
};

export const useFriendsStore = create<FriendsStoreType>((set) => ({
  friends: null,
  setFriends: (friends) => set({ friends }),
}));
