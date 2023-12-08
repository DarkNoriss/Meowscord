import type { statusEnum, users } from '@/db/schema';

export type User = typeof users.$inferSelect;

export type UserStatus = typeof statusEnum.enumValues;
