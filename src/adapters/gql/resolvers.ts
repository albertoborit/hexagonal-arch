import { USER_DATA } from '../../infrastructure/user-data';

export const resolvers = {
    Query: {
      users: () => USER_DATA,
    },
  };