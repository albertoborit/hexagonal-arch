export interface EmailInterface {
    sendEmail(email:string, message:string):Promise<boolean>
}