import express, {Express, NextFunction, Request, Response} from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDatabase } from "@config/database";
import routes from "@routes/index";
import { MESSAGES } from "@utils/constants";
import NotFoundError from "@errors/http404Error";
import errorHandler from "@middleware/errorHandler";
import setContentType from "@middleware/setContentType";
import setupSwaggerDocs from "@config/swagger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

setupSwaggerDocs(app);

app.use(setContentType);
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express TypeScript Server");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError(MESSAGES.REQUEST_API_ROUTE_NOT_FOUND(req.path)));
});


app.use(errorHandler);

app.listen(port, async () => {
    await connectDatabase();
    console.log(MESSAGES.SERVER_RUNNING(port));
});
