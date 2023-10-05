import { create } from 'zustand';

type AsideStoreType = {
  open: boolean;
  toggleOpen: () => void;
};

export const useAsideStore = create<AsideStoreType>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
