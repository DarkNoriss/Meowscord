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

export const category = pgTable('category', {
  id: varchar('id').primaryKey().notNull(),
  serverId: varchar('server_id')
    .notNull()
    .references(() => servers.id, { onDelete: 'cascade' }),
  name: varchar('name').notNull(),
});

export const textChannels = pgTable('text_channels', {
  id: varchar('id').primaryKey().notNull(),
  serverId: varchar('server_id')
    .notNull()
    .references(() => servers.id, { onDelete: 'cascade' }),
  name: varchar('name').notNull(),
});

export const voiceChannels = pgTable('voice_channels', {
  id: varchar('id').primaryKey().notNull(),
  serverId: varchar('server_id')
    .notNull()
    .references(() => servers.id, { onDelete: 'cascade' }),
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

export const directMessages = pgTable('direct_messages', {
  id: varchar('id').primaryKey().notNull(),
  userId: varchar('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  friendId: varchar('friend_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  lastMessage: bigint('created_at', { mode: 'number' }),
});

export const textChannelMessage = pgTable('message', {
  id: varchar('id').primaryKey().notNull(),
  channelId: varchar('channel_id')
    .notNull()
    .references(() => textChannels.id, { onDelete: 'cascade' }),
  userId: varchar('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  content: varchar('content').notNull(),
  createdAt: bigint('created_at', { mode: 'number' }).notNull(),
});

export const dmMessage = pgTable('dm_message', {
  id: varchar('id').primaryKey().notNull(),
  userId: varchar('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  friendId: varchar('friend_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  content: varchar('content').notNull(),
  createdAt: bigint('created_at', { mode: 'number' }).notNull(),
});

//
// RELATIONS
//

export const userRelations = relations(users, ({ many }) => ({
  servers: many(servers),
  friends: many(users),
  pending: many(users),
  blocked: many(users),
  directMessages: many(directMessages),
}));

export const serverRelations = relations(servers, ({ one, many }) => ({
  owner: one(users, {
    fields: [servers.ownerId],
    references: [users.id],
  }),
  users: many(userServers),
  categories: many(category),
  textThannels: many(textChannels),
  voiceChannels: many(voiceChannels),
}));

export const categoryRelations = relations(category, ({ one, many }) => ({
  server: one(servers, {
    fields: [category.serverId],
    references: [servers.id],
  }),
  textThannels: many(textChannels),
  voiceChannels: many(voiceChannels),
}));

export const channelRelations = relations(textChannels, ({ one, many }) => ({
  server: one(servers, {
    fields: [textChannels.serverId],
    references: [servers.id],
  }),
  category: one(category, {
    fields: [textChannels.id],
    references: [category.id],
  }),
  textChannelMessages: many(textChannelMessage),
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

export const userFriendRelations = relations(userFriends, ({ one }) => ({
  user: one(users, {
    fields: [userFriends.userId],
    references: [users.id],
  }),
  friend: one(users, {
    fields: [userFriends.friendId],
    references: [users.id],
  }),
}));

export const directMessagesRelations = relations(directMessages, ({ one }) => ({
  user: one(users, {
    fields: [directMessages.userId],
    references: [users.id],
  }),
  friend: one(users, {
    fields: [directMessages.friendId],
    references: [users.id],
  }),
}));

export const channelMessageRelations = relations(
  textChannelMessage,
  ({ one }) => ({
    channel: one(textChannels, {
      fields: [textChannelMessage.channelId],
      references: [textChannels.id],
    }),
    user: one(users, {
      fields: [textChannelMessage.userId],
      references: [users.id],
    }),
  }),
);

export const userPendingRelations = relations(userPending, ({ one }) => ({
  user: one(users, {
    fields: [userPending.userId],
    references: [users.id],
  }),
  pending: one(users, {
    fields: [userPending.pendingId],
    references: [users.id],
  }),
}));

export const userBlockedRelations = relations(userBlocked, ({ one }) => ({
  user: one(users, {
    fields: [userBlocked.userId],
    references: [users.id],
  }),
  blocked: one(users, {
    fields: [userBlocked.blockedId],
    references: [users.id],
  }),
}));
