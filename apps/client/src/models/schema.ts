import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm/relations';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().notNull(),
  username: varchar('username').notNull(),
});

export const servers = pgTable('servers', {
  id: varchar('id').primaryKey().notNull(),
  name: varchar('name').notNull(),
  ownerId: varchar('ownerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  usersId: varchar('usersId').notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  servers: many(servers),
}));

export const serverRelations = relations(servers, ({ one }) => ({
  owner: one(users, {
    fields: [servers.ownerId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type Server = typeof servers.$inferSelect;
