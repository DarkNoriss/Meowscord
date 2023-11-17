'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import { DropdownMenuItem } from '@/components/ui/DropdownMenu';

const LogoutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <DropdownMenuItem onClick={() => signOut(() => router.push('/'))}>
      <span>Logout</span>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
