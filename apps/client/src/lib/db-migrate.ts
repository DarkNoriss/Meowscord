/* eslint-disable no-console */
import { migrate } from 'drizzle-orm/postgres-js/migrator';

import { db } from './db';

// Disable migrate function if using Edge runtime for local environment and use `drizzle-kit push` instead
export const migrateDb = async () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Migrating tables...');
    try {
      await migrate(db, { migrationsFolder: './migrations' });
      console.log('Tables migrated!');
    } catch (error) {
      console.error('Error performing migration: ', error);
    }
  }
};
