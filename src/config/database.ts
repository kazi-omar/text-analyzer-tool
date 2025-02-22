import { DataSource } from "typeorm";
import * as path from "path";
import dotenv from "dotenv";
import { MESSAGES } from "@utils/constants";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const MAX_RETRIES = 10;  // Max retry attempts
const RETRY_DELAY = 10000;

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
    let attempt = 0;
    while (attempt < MAX_RETRIES) {
        try {
            await AppDataSource.initialize();
            console.log(MESSAGES.DATABASE_CONNECTED);
            return;
        } catch (error) {
            attempt++;
            console.error(`${MESSAGES.DATABASE_CONNECTION_FAILED}, Attempt: ${attempt}`, error);

            if (attempt < MAX_RETRIES) {
                console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY)); // Wait before retrying
            } else {
                console.error(`Max retry attempts reached. Could not connect to the database.`);
                process.exit(1);
            }
        }
    }
};
