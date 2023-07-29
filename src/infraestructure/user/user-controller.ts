import { UserImplementation } from "../repositories/user.repository";
export class UserController {
    private userImplementation:UserImplementation;
    constructor(){
        this.userImplementation = new UserImplementation();
    }
    async run(userId:string){
       return this.userImplementation.getUser(userId);
    }
}