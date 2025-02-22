import { Request, Response, NextFunction } from "express";
import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";

const errorHandler = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const response = {
        status: "error",
        statusCode,
        message: err.message,
        description: err.description,
        errors: err.errors
    };

    res.status(statusCode).json(response);
};

export default errorHandler;
