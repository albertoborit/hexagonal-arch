"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./infraestructure/http/user/user-router");
function bootstrap() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/", user_router_1.userRouter);
    const port = 8000;
    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    });
}
bootstrap();
