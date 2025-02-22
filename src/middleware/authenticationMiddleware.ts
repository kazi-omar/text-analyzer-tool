import { Request, Response, NextFunction } from "express";
import HttpStatus from "@utils/httpStatus";
import {ErrorName} from "@utils/constants";

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Dummy authentication logic
    const isAuthenticated = true; // This should be replaced with actual authentication logic

    if (isAuthenticated) {
        req.user = { id: "4958ec63-7c95-4cb8-a0f3-fedc26222252", name: "John Doe", email: "john.doe@example.com" };
        next();
    } else {
        res.status(HttpStatus.UNAUTHORIZED).send({ success: false, message: ErrorName.UNAUTHORIZED});
    }
};

export default authenticationMiddleware;
