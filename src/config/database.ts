import { DataSource } from "typeorm";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, "../models/**/*.ts")],
    migrations: [path.join(__dirname, "../database/migration/**/*.ts")],
    subscribers: [path.join(__dirname, "../subscriber/**/*.ts")],
});

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};
