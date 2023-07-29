import { User } from "../user"

export interface UserInterface {
    saveUser(user: User):Promise<void>
    getUser(userId:string):Promise<User>
}