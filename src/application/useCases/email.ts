import { EmailInterface } from "../../domain/interfaces/email.interface"
import { EmailProviderInterface } from "../../domain/interfaces/emailProvider.interface"

export class EmailService implements EmailInterface{

    constructor(private readonly emailProviderInterface:EmailProviderInterface){}

    async sendEmail(email: string, message: string):Promise<boolean>{
        const user = await this.emailProviderInterface.send(email, message)
        return user ? true : false
    }
}