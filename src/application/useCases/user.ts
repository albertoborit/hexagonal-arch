import { DatabaseInterface } from "../../domain/interfaces/db.interface"
import { UserInterface } from "../../domain/interfaces/user.interface"
import { User } from "../../domain/user"

export class UserService implements UserInterface{
    constructor(private readonly databaseInterface:DatabaseInterface){}
    async saveUser(user: User): Promise<void> {
        await this.databaseInterface.save(user)
    }
    async getUser(userId: string): Promise<User> {
        const user = this.databaseInterface.get(userId)
        if(!user){
            throw('No user found')
        }
        return user as unknown as User
    }
}