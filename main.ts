import { UserController } from "./src/infraestructure/user/user-controller"
(async (id="1")=>{
    let user= new UserController()
    let userResult = await user.run(id)
    console.log(userResult)
})()