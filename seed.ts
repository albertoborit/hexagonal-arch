import mysql from "mysql2/promise";
import { USER_DATA } from "./src/infrastructure/user-data";
import dotenv from "dotenv";
dotenv.config();
const DB_CONFIG = {
    host: process.env.DB_HOST || "127.0.0.1",
    port: 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "mydatabase",
};

async function seedUsers() {
    let connection: mysql.Connection | null = null;
    console.log(DB_CONFIG);
    try {
        connection = await mysql.createConnection(DB_CONFIG);

        console.log("Connected to the database.");
        for (const user of USER_DATA) {
            const { id, username, active } = user;
            const query = `
                INSERT INTO users (id, username, active)
                VALUES (?, ?, ?)
                ON DUPLICATE KEY UPDATE
                username = VALUES(username),
                active = VALUES(active);
            `;

            await connection.execute(query, [id, username, active]);
            console.log(`Seeded user: ${username}`);
        }

        console.log("User data seeded successfully.");
    } catch (error) {
        console.error("Error seeding user data:", error);
    } finally {
        if (connection) {
            await connection.end();
            console.log("Database connection closed.");
        }
    }
}
seedUsers();
