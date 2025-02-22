import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class UnprocessableEntityError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.UNPROCESSABLE_ENTITY, ErrorName.UNPROCESSABLE_ENTITY, message);
    }
}

export default UnprocessableEntityError;
