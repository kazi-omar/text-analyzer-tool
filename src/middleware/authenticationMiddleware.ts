import { Request, Response, NextFunction } from "express";
import HttpStatus from "@utils/httpStatus";
import {ErrorName} from "@utils/constants";

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Dummy authentication logic
    const isAuthenticated = true; // This should be replaced with actual authentication logic

    if (isAuthenticated) {
        req.user = { id: "788fc310-7539-4a3c-8dd7-aade66ee7439", name: "John Doe", email: "john.doe@example.com" };
        next();
    } else {
        res.status(HttpStatus.UNAUTHORIZED).send({ success: false, message: ErrorName.UNAUTHORIZED});
    }
};

export default authenticationMiddleware;
