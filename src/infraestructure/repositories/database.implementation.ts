import { User, UserT } from "../../domain/user";
import { DatabaseInterface } from "../../domain/interfaces/db.interface";
import { DatabaseService } from "../../application/useCases/database";

export class InMemoryUserRepository implements DatabaseInterface {
    private databaseService:DatabaseService
    constructor(){
        this.databaseService = new DatabaseService()
    }
    async save(instance: {id:string, email:string}): Promise<void> {
       this.databaseService.save({id:instance.id,email:instance.email})
    }
    async get(id:string): Promise<User> {
        return await this.databaseService.get(id) as User
    }
}