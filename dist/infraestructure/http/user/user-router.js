"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user-controller");
const MySQLRepository_1 = require("../../database/MySQLRepository");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userController = new user_controller_1.UserController(new MySQLRepository_1.MySQLRepository());
userRouter.get("/:id", (req, res) => { userController.getById(req, res); });
