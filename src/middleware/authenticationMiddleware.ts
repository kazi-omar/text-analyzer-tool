import { Request, Response, NextFunction } from "express";
import HttpStatus from "@utils/httpStatus";
import {ErrorName} from "@utils/constants";

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Dummy authentication logic
    const isAuthenticated = true; // This should be replaced with actual authentication logic

    if (isAuthenticated) {
        req.user = { id: "838b90e0-6654-4a6f-9fc4-077f24107786", name: "John Doe", email: "john.doe@example.com" };
        next();
    } else {
        res.status(HttpStatus.UNAUTHORIZED).send({ success: false, message: ErrorName.UNAUTHORIZED});
    }
};

export default authenticationMiddleware;
