import express, {Express, NextFunction, Request, Response} from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDatabase } from "@config/database";
import { keycloak, memoryStore } from "@config/keycloak";
import session from "express-session";
import routes from "@routes/index";
import { MESSAGES } from "@utils/constants";
import NotFoundError from "@errors/http404Error";
import errorHandler from "@middleware/errorHandler";
import setContentType from "@middleware/setContentType";
import setupSwaggerDocs from "@config/swagger";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Set up session for Keycloak
app.use(session({
    secret: "some_secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

// Apply Keycloak middleware
app.use(keycloak.middleware());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

setupSwaggerDocs(app);

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Public Route - No authentication required.");
});

// Protected Route
app.get("/api/protected", keycloak.protect(), (req: Request, res: Response) => {
    res.send("You have accessed a protected route!");
});

// Logout Route
app.get("/logout", (req: Request, res: Response) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

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
