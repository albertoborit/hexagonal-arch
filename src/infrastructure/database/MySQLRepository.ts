import { IUser } from "../../ports/UserRepository";
import { User } from "../../domain/user/User";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const DB_CONFIG = {
    host: process.env.DB_HOST || "127.0.0.1",
    port: 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "mydatabase",
};
export class MySQLRepository implements IUser{
    private connection!: mysql.Connection;

    constructor() {
        this.initDbConnection();
    }

    private async initDbConnection() {
        try {
            this.connection = await mysql.createConnection(DB_CONFIG);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to connect to database: ${error.message}`);
            } else {
                throw new Error('Failed to connect to database: Unknown error');
            }
        }
    }
    async getUserById(id: string): Promise<User> {
        try {
            const [rows]: [mysql.RowDataPacket[], mysql.FieldPacket[]] = await this.connection.execute(
                'SELECT id, username, active FROM users WHERE id = ?',
                [id]
            );
            const row = rows[0];
            return new User(row.id, row.username, row.active) as User;
        } catch(e){
            throw e
        }
    }
    async getUsers(): Promise<User[]> {
        try {
            const [rows]: [mysql.RowDataPacket[], mysql.FieldPacket[]] = await this.connection.execute(
                'SELECT id, username, active FROM users'
            );
            return rows.map((row) => new User(row.id, row.username, row.active) as User);
        } catch(e){
            throw e
        }
    }
}