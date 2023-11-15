import { SignUp } from '@clerk/nextjs';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Sign up',
  description:
    'Effortlessly create an account through our intuitive sign-up process.',
};

const Page = () => <SignUp />;

export default Page;
