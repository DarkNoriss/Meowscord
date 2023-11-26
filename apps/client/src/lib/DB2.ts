/* eslint-disable no-console */
import { sql } from '@vercel/postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const db = drizzle(sql);

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
