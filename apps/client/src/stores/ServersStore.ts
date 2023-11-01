import { create } from 'zustand';

import type { ServerType } from '@/types/server';

type ServersStoreType = {
  servers: null | ServerType[];
  setServers: (servers: ServerType[]) => void;
};

export const useServersStore = create<ServersStoreType>((set) => ({
  servers: null,
  setServers: (servers) => set({ servers }),
}));
