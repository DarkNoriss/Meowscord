import { create } from 'zustand';

type NavbarStoreType = {
  open: boolean;
  toggleOpen: () => void;
};

export const useNavbarStore = create<NavbarStoreType>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
