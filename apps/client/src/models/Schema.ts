import { relations } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().notNull(),
  username: varchar('name').notNull(),
});

export const servers = pgTable('servers', {
  id: varchar('id').primaryKey().default('gen_random_uuid()'),
  name: varchar('name').notNull(),
  ownerId: varchar('owner').notNull(),
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
