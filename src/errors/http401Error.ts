import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class UnauthorizedError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.UNAUTHORIZED, ErrorName.UNAUTHORIZED, message);
    }
}

export default UnauthorizedError;
