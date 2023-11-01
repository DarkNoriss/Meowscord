import { create } from 'zustand';

import type { UserType } from '@/types/user';

type FriendsStoreType = {
  friends: null | UserType[];
  setFriends: (friends: UserType[]) => void;
};

export const useFriendsStore = create<FriendsStoreType>((set) => ({
  friends: null,
  setFriends: (friends) => set({ friends }),
}));
