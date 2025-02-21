import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDatabase } from "@config/database";
import { MESSAGES } from "@utils/constants";
import errorHandler from "@middleware/errorHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
    res.send("Express TypeScript Server");
});

app.listen(port, async () => {
    await connectDatabase();
    console.log(MESSAGES.SERVER_RUNNING(port));
});
