import express from "express"
import { UserController } from "./user-controller"
import { MySQLRepository } from "../../database/MySQLRepository"
const userRouter = express.Router()

const userController:UserController = new UserController(new MySQLRepository())

userRouter.get("/:id", (req, res) => {userController.getById(req, res)})

export {
    userRouter
}