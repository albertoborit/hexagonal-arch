import { DatabaseInterface } from "../../domain/interfaces/db.interface";
import { User, UserT } from "../../domain/user";

const users: Array<UserT> =  [
    {
        "id":"1",
        "email":"sss"
    },
    {
        "id":"2",
        "email":"sss2"
    }
]

export class DatabaseService implements DatabaseInterface {
    constructor(){}
    async save(instance: {id:string, email:string}): Promise<void> {
        users.push({id:instance.id,email:instance.email})
    }
    async get(id: string): Promise<Object> {
        const result = users.find(user=>user.id===id as any)
        if(!result){
            throw('No user found')
        }
        return result as User
    }

}