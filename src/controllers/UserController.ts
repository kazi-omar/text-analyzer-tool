import { Request, Response, NextFunction } from "express";
import { UserService } from "@services/UserService";
import { success } from "@utils/response";
import { MESSAGES } from "@utils/constants";
import HttpStatus from "@utils/httpStatus";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        const { name, email } = req.body;

        try {
            const user = await this.userService.createUser(name, email);
            res.status(HttpStatus.CREATED).send(success(MESSAGES.USER_CREATED_SUCCESSFULLY, user));
        } catch (error) {
            return next(error);
        }
    }
}
