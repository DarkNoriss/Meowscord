import { bigint, pgTable, primaryKey, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm/relations';

//
// SCHEMAS
//

export const users = pgTable('users', {
  id: varchar('id').primaryKey().notNull(),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  username: varchar('username').notNull(),
  imageUrl: varchar('image_url').notNull(),
  createdAt: bigint('created_at', { mode: 'number' }).notNull(),
});

export const servers = pgTable('servers', {
  id: varchar('id').primaryKey().notNull(),
  ownerId: varchar('owner_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name').notNull(),
});

export const userServers = pgTable(
  'user_servers',
  {
    userId: varchar('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    serverId: varchar('server_id')
      .notNull()
      .references(() => servers.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.userId, table.serverId],
      }),
    };
  },
);

export const userFriends = pgTable(
  'user_friends',
  {
    userId: varchar('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    friendId: varchar('friend_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.userId, table.friendId],
      }),
    };
  },
);

//
// RELATIONS
//

export const userRelations = relations(users, ({ many }) => ({
  servers: many(servers),
  // friends: many(users),
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
