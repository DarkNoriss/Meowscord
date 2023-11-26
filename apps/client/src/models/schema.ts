import { bigint, pgTable, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm/relations';
import { nanoid } from 'nanoid';

//
// SCHEMAS
//

export const users = pgTable('users', {
  id: varchar('id').primaryKey().notNull(),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  username: varchar('username').notNull(),
  imageUrl: varchar('image_url').notNull(),
  profileImageUrl: varchar('profile_image_url'),
  createdAt: bigint('created_at', { mode: 'number' }).notNull(),
});

export const servers = pgTable('servers', {
  id: varchar('id').primaryKey().notNull().default(nanoid()),
  ownerId: varchar('owner_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name').notNull(),
});

export const userServers = pgTable('user_servers', {
  userId: varchar('user_id')
    .primaryKey()
    .notNull()
    .references(() => users.id),
  serverId: varchar('server_id')
    .primaryKey()
    .notNull()
    .references(() => servers.id),
});

//
// RELATIONS
//

export const userRelations = relations(users, ({ many }) => ({
  servers: many(servers),
}));

export const serverRelations = relations(servers, ({ one, many }) => ({
  owner: one(users, {
    fields: [servers.ownerId],
    references: [users.id],
  }),
  users: many(userServers),
}));

export const userServerRelations = relations(userServers, ({ one }) => ({
  user: one(users, {
    fields: [userServers.userId],
    references: [users.id],
  }),
  server: one(servers, {
    fields: [userServers.serverId],
    references: [servers.id],
  }),
}));

//
// TYPES
//
