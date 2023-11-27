// /* eslint-disable no-console */
// import { db } from '@/lib/db';
// import { users } from '@/models/schema';

// export async function POST(req: Request) {
//   try {
//     const {
//       id,
//       firstName,
//       lastName,
//       username,
//       imageUrl,
//       profileImageUrl,
//       createdAt,
//     } = await req.json();

//     await db.insert(users).values({
//       id,
//       firstName,
//       lastName,
//       username,
//       imageUrl,
//       profileImageUrl,
//       createdAt,
//     });

//     return new Response('User added!', { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response('Error adding user', { status: 500 });
//   }
// }
