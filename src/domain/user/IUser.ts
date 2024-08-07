import { User } from "./User";
export interface IUser {
    getUserById(id: string):Promise<User>
}