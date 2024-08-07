import express from "express"
import { userRouter } from "./infraestructure/http/user/user-router"
function bootstrap() {
    const app = express()
    app.use(express.json())
    app.use("/", userRouter)
    const port = 8000
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    })
}
bootstrap()