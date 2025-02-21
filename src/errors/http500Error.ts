import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class InternalServerError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR, ErrorName.INTERNAL_SERVER_ERROR, message);
    }
}

export default InternalServerError;
