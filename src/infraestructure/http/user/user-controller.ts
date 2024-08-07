import { MySQLRepository } from "../../database/MySQLRepository";

export class UserController {
    constructor(private mySQLRepository:MySQLRepository){}
    async getById(req:any, res:any){
        const user = await this.mySQLRepository.getById(req.params.id)
        res.json({user})
    }
}