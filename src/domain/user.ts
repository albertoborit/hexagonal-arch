export type UserT = {
    id:string
    email:string
}

export class User {
    public id: string
    public email: string
    constructor({id, email}:UserT){
        this.id = id
        this.email = email
    }
}