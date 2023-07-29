import { User } from "../../domain/user";
import { UserInterface } from "../../domain/interfaces/user.interface";
import { InMemoryUserRepository } from "./database.implementation";
import { UserService } from "../../application/useCases/user";


export class UserImplementation implements UserInterface {
    private userService:UserService;
    constructor(){
        this.userService = new UserService(new InMemoryUserRepository());
    }
    async saveUser(user: User): Promise<void> {
        await this.userService.saveUser(user)
    }
    async getUser(userId: string): Promise<User> {
        const user = this.userService.getUser(userId)
        if(!user){
            throw('No user found')
        }
        return user
    }
}