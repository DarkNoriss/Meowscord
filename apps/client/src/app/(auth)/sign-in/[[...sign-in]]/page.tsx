import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Sign in',
  description:
    'Seamlessly sign in to your account with our user-friendly login process.',
};

const Page = () => <SignIn path="/sign-in" routing="path" />;

export default Page;
