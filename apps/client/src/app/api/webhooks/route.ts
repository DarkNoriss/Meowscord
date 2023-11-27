/* eslint-disable no-console */
import type { WebhookEvent } from '@clerk/nextjs/server';
import axios from 'axios';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

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

  switch (evt.type) {
    case 'user.created': {
      const {
        id,
        first_name: firstName,
        last_name: lastName,
        username,
        image_url: imageUrl,
        created_at: createdAt,
      } = evt.data;

      axios.post('/api/user/create', {
        id,
        firstName,
        lastName,
        username,
        imageUrl,
        createdAt,
      });
      break;
    }
    case 'user.updated':
    case 'user.deleted':
    default:
      break;
  }

  return new Response('Webhook done!', { status: 200 });
}
