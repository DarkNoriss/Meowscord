import { faker } from '@faker-js/faker';

import { UserStatuses } from '@/types/user';

const MOCK_FRIENDS = 10;
const MOCK_SERVERS = 10;

const generateFakeId = () =>
  faker.number.int({ min: 100000000000000, max: 999999999999999 }).toString();

export const generateFakeFriends = () => {
  return Array.from({ length: MOCK_FRIENDS }, (_) => ({
    id: generateFakeId(),
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    avatar: faker.image.avatarGitHub(),
    status: faker.helpers.arrayElement(Object.values(UserStatuses)),
  }));
};

export const generateFakeServers = () => {
  return Array.from({ length: MOCK_SERVERS }, (_) => ({
    id: generateFakeId(),
    name: faker.animal.cat(),
    photo: faker.image.urlPicsumPhotos({ height: 64, width: 64 }),
    messages: 0,
  }));
};
