import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class BadRequestError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST, ErrorName.BAD_REQUEST, message);
    }
}

export default BadRequestError;
