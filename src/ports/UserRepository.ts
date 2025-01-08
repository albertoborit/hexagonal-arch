import { User } from "../domain/user/User";
export interface IUser {
    getUserById(id: string):Promise<User>
}