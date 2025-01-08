import { User } from "../../domain/user/User";
import { MySQLRepository } from "../../infrastructure/database/MySQLRepository";
const userRepository = new MySQLRepository();

export const resolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      return userRepository.getUsers();
    },
    getUserById: async (_: any, { id }: { id: string }): Promise<User | null> => {
      return userRepository.getUserById(id);
    },
  },
};
