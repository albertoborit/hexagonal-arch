import { MySQLRepository } from "../../../infrastructure/database/MySQLRepository";

export class UserController {
    constructor(private mySQLRepository:MySQLRepository){}
    async getById(req:any, res:any){
        const user = await this.mySQLRepository.getUserById(req.params.id)
        res.json({user})
    }
}