import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.NOT_FOUND, ErrorName.NOT_FOUND, message);
    }
}

export default NotFoundError;
