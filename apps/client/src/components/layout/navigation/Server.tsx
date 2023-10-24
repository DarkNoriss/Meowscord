import Image from 'next/image';
import type { FC } from 'react';

import { Button } from '@/components/ui/Button';
import type { ServerType } from '@/types/server';

type ServerProps = {
  serverdata: ServerType;
};

const Server: FC<ServerProps> = ({ serverdata }) => {
  const { name, photo } = serverdata;

  return (
    <div className="mb-2">
      <Button className="h-12 w-12 rounded-full p-0 hover:rounded-2xl">
        <Image
          className="rounded-full hover:rounded-2xl"
          src={photo}
          alt={name}
          height={64}
          width={64}
        />
      </Button>
    </div>
  );
};

export default Server;
