import { EmailProviderInterface } from "../../domain/interfaces/emailProvider.interface";

export class XAMPPProvider implements EmailProviderInterface {
    async send(email: string, message: string): Promise<boolean> {
        console.log(email,message)
        return true
    }

}