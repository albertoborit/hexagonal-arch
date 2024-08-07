import { User } from "../user/User";

export interface IDatabase {
    getById(id: string):Promise<User>
}