import { IDatabase } from "../../domain/database/IDatabase";
import { IUser } from "../../domain/user/IUser";
import { User } from "../../domain/user/User";

export class UserUseCase implements IUser {
    constructor(private iDatabase:IDatabase){}
    async getUserById(id: string): Promise<User> {
        return await this.iDatabase.getById(id) 
    }
}