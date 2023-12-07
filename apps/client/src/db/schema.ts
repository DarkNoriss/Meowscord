import {
  bigint,
  pgEnum,
  pgTable,
  primaryKey,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm/relations';

//
// ENUMS
//

export const statusEnum = pgEnum('status', [
  'online',
  'idle',
  'dnd',
  'offline',
  'mobile',
  'pending',
  'blocked',
]);

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
  bio: varchar('bio'),
  status: statusEnum('status').default('online').notNull(),
});

export const servers = pgTable('servers', {
  id: varchar('id').primaryKey().notNull(),
  ownerId: varchar('owner_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name').notNull(),
  imageUrl: varchar('image_url'),
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

export const userPending = pgTable(
  'user_pending',
  {
    userId: varchar('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    pendingId: varchar('pending_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.userId, table.pendingId],
      }),
    };
  },
);

export const userBlocked = pgTable(
  'user_blocked',
  {
    userId: varchar('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    blockedId: varchar('blocked_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.userId, table.blockedId],
      }),
    };
  },
);

//
// RELATIONS
//

export const userRelations = relations(users, ({ many }) => ({
  servers: many(servers),
  friends: many(users),
  pending: many(users),
  blocked: many(users),
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
