import { create } from 'zustand';

export type Filters = 'Online' | 'All' | 'Pending' | 'Blocked' | 'Add Friend';

type FiltersStoreType = {
  filter: Filters;
  setFilter: (filter: Filters) => void;
};

export const useFriendFiltersStore = create<FiltersStoreType>((set) => ({
  filter: 'Online',
  setFilter: (filter) => set({ filter }),
}));
