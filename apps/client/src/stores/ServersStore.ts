import { create } from 'zustand';

import { generateFakeServers } from '@/lib/mock';
import type { ServerType } from '@/types/server';

type ServersStoreType = {
  serversList: ServerType[];
};

export const useServersStore = create<ServersStoreType>(() => ({
  serversList: generateFakeServers(),
}));
