import { relations } from 'drizzle-orm/relations';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  username: text('username').notNull(),
});

export const servers = sqliteTable('servers', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  ownerId: text('ownerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  usersId: text('usersId').notNull(),
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
