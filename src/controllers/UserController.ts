import { Request, Response, NextFunction } from "express";
import { UserService } from "@services/UserService";
import { success } from "@utils/response";
import { MESSAGES } from "@utils/constants";
import HttpStatus from "@utils/httpStatus";
import {TextService} from "@services/TextService";

export class UserController {
    private userService: UserService;
    private textService: TextService;

    constructor() {
        this.userService = new UserService();
        this.textService = new TextService();
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

    async getUserReport(req: Request, res: Response, next: NextFunction) {
        const userId = req.user.id; // Assuming user ID is available in req.user

        try {
            const texts = await this.textService.getTextsByUserId(userId);
            const totalSentences = texts.reduce((acc, text) => acc + text.analyses.reduce((a, analysis) => a + analysis.sentence_count, 0), 0);
            const totalParagraphs = texts.reduce((acc, text) => acc + text.analyses.reduce((a, analysis) => a + analysis.paragraph_count, 0), 0);
            const totalWords = texts.reduce((acc, text) => acc + text.analyses.reduce((a, analysis) => a + analysis.word_count, 0), 0);
            const totalChars = texts.reduce((acc, text) => acc + text.analyses.reduce((a, analysis) => a + analysis.char_count, 0), 0);

            console.log("Total Sentences:", texts);

            res.render("report", {
                texts,
                totalSentences,
                totalParagraphs,
                totalWords,
                totalChars
            });
        } catch (error) {
            return next(error);
        }
    }
}
