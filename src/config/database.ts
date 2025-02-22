import { DataSource } from "typeorm";
import * as path from "path";
import dotenv from "dotenv";
import { MESSAGES } from "@utils/constants";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        isProduction
            ? path.join(__dirname, "../../dist/models/**/*.js")
            : path.join(__dirname, "../models/**/*.ts")
    ],
    migrations: [
        isProduction
            ? path.join(__dirname, "../../dist/database/migration/**/*.js")
            : path.join(__dirname, "../database/migration/**/*.ts")
    ],
    subscribers: [
        isProduction
            ? path.join(__dirname, "../../dist/subscriber/**/*.js")
            : path.join(__dirname, "../subscriber/**/*.ts")
    ],
});

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log(MESSAGES.DATABASE_CONNECTED);
    } catch (error) {
        console.error(MESSAGES.DATABASE_CONNECTION_FAILED, error);
        process.exit(1);
    }
};