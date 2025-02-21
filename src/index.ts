import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDatabase } from "./config/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express TypeScript Server");
});

app.listen(port, async () => {
    await connectDatabase();
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
