import BaseError from "@errors/baseError";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

class BadGatewayError extends BaseError {
    constructor(message: string) {
        super(message, HttpStatus.BAD_GATEWAY, ErrorName.BAD_GATEWAY, message);
    }
}

export default BadGatewayError;
