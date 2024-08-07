import { IDatabase } from "../../domain/database/IDatabase";
import { User } from "../../domain/user/User";
import { USER_DATA } from "../user-data";
export class MySQLRepository implements IDatabase{
    constructor(){}
    async getById(id: string): Promise<User> {
        try {
            return await [...USER_DATA.filter(e => e[0] === id)] as unknown as User
        } catch(e){
            throw e
        }
    }
    
}