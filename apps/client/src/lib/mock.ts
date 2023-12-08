import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

import { statusEnum } from '@/db/schema';
import type { User, UserType } from '@/types/user';
import { UserStatuses } from '@/types/user';

const generateFakeId = () =>
  faker.number.int({ min: 100000000000000, max: 999999999999999 }).toString();

export const generateFakeFriends = (numberOfFriends: number): UserType[] => {
  return Array.from({ length: numberOfFriends }, (_) => ({
    id: generateFakeId(),
    fullName: faker.person.fullName(),
    username: faker.internet.userName(),
    avatar: faker.image.avatarGitHub(),
    status: faker.helpers.arrayElement(Object.values(UserStatuses)),
  }));
};

export const generateFakeUser = (): User => {
  return {
    id: nanoid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    imageUrl: faker.image.avatarGitHub(),
    createdAt: faker.date.past().getTime(),
    bio: null,
    status: faker.helpers.arrayElement(statusEnum.enumValues),
  };
};

export const createFakeServer = () => {
  return {
    id: generateFakeId(),
    name: faker.animal.cat(),
    imageUrl: faker.image.urlLoremFlickr({
      height: 64,
      width: 64,
      category: 'cat',
    }),
  };
};
