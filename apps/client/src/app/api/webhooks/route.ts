/* eslint-disable no-console */
import type { UserJSON, WebhookEvent } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

import { db } from '@/db/index';
import { users } from '@/db/schema';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const { WEBHOOK_SECRET } = process.env;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svixId = headerPayload.get('svix-id');
  const svixTimestamp = headerPayload.get('svix-timestamp');
  const svixSignature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // // Get the ID and type
  // const { id } = evt.data;
  // const eventType = evt.type;

  // console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  // console.log('Webhook body:', body);

  const { data, type } = evt;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, first_name, last_name, username, image_url, created_at } =
    data as UserJSON;

  const user = {
    id,
    firstName: first_name,
    lastName: last_name,
    username: username || '',
    imageUrl: image_url,
    createdAt: created_at,
  };

  switch (type) {
    case 'user.created': {
      try {
        console.log('Trying to create user');

        await db.insert(users).values(user);
        console.log('User created!');
      } catch (error) {
        console.error(error);
        return new Response('Error creating user', { status: 500 });
      }
      break;
    }
    case 'user.updated': {
      try {
        console.log('Trying to update user');

        await db.update(users).set(user).where(eq(users.id, id));
        console.log('User updated!');
      } catch (error) {
        console.error(error);
        return new Response('Error updating user', { status: 500 });
      }
      break;
    }
    case 'user.deleted': {
      try {
        console.log('Trying to delete user');

        await db.delete(users).where(eq(users.id, id));
        console.log('User deleted!');
      } catch (error) {
        console.error(error);
        return new Response('Error deleting user', { status: 500 });
      }
      break;
    }
    default:
      break;
  }

  console.log('Weebhook done!');

  return new Response('Webhook done!', { status: 200 });
}
