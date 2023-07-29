export interface DatabaseInterface {
    save(instance:Object):Promise<void>
    get(instance:Object):Promise<Object>
}