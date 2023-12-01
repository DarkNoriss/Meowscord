import type { servers } from '@/db/schema';

export type Server = typeof servers.$inferInsert;

export type ServerWithoutOwner = Omit<Server, 'ownerId'>;
