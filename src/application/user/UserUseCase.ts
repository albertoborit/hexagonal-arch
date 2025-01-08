import { IUser } from "../../ports/UserRepository";
import { User } from "../../domain/user/User";

export class UserUseCase implements IUser {
    constructor(private UserRepository:IUser){}
    async getUserById(id: string): Promise<User> {
        return await this.UserRepository.getUserById(id) 
    }
}