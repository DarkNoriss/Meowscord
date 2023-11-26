/* eslint-disable no-console */
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import * as schema from '../models/schema';
import { Env } from './Env.mjs';

const client = createClient({
  url: Env.DATABASE_URL,
  authToken: Env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

// Disable migrate function if using Edge runtime for local environment and use `drizzle-kit push` instead
if (process.env.NODE_ENV !== 'production') {
  console.log('Migrating tables...');
  try {
    await migrate(db, { migrationsFolder: './migrations' });
    console.log('Tables migrated!');
  } catch (error) {
    console.error('Error performing migration: ', error);
  }
}
