export interface EmailProviderInterface {
    send(email:string, message:string):Promise<boolean>
}