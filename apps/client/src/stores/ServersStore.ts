import { create } from 'zustand';

import type { Server } from '@/types/server';

type ServersStoreType = {
  servers: null | Server[];
  setServers: (servers: Server[]) => void;
};

export const useServersStore = create<ServersStoreType>((set) => ({
  servers: null,
  setServers: (servers) => set({ servers }),
}));
