import { EmailInterface } from "../../domain/interfaces/email.interface";
import { XAMPPProvider } from "./emailProvider.repository";

export class EmailRepository implements EmailInterface {
    emailProvider:XAMPPProvider;    
    constructor(){
        this.emailProvider = new XAMPPProvider();
    }
    async sendEmail(email: string, message: string): Promise<boolean> {
        return this.emailProvider.send(email,message)
    }
}