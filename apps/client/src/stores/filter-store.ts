import { create } from 'zustand';

export type Filters = 'online' | 'all' | 'pending' | 'blocked' | 'add friend';

type FiltersStoreType = {
  filter: Filters;
  setFilter: (filter: Filters) => void;
};

export const useFriendFiltersStore = create<FiltersStoreType>((set) => ({
  filter: 'online',
  setFilter: (filter) => set({ filter }),
}));
