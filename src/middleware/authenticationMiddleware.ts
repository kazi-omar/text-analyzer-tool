import { Request, Response, NextFunction } from "express";
import { keycloak } from "@config/keycloak";
import { UserRepository } from "@repositories/UserRepository";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

const userRepository = new UserRepository();

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    keycloak.protect()(req, res, async (err) => {
        if (err) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ success: false, message: ErrorName.UNAUTHORIZED });
        }

        const token = req.kauth?.grant?.access_token;
        if (!token) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ success: false, message: ErrorName.UNAUTHORIZED });
        }

        const { sub, preferred_username, email } = token.content;

        let user = await userRepository.findById(sub);
        if (!user) {
            user = await userRepository.save({ id: sub, name: preferred_username, email, texts: [] });
        }

        req.user = user;
        next();
    });
};

export default authenticationMiddleware;
