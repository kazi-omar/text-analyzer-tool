import { Request, Response, NextFunction } from "express";
import { TextService } from "@services/TextService";
import { success } from "@utils/response";
import { MESSAGES } from "@utils/constants";
import HttpStatus from "@utils/httpStatus";

export class TextController {
    private textService: TextService;

    constructor() {
        this.textService = new TextService();
    }

    async createText(req: Request, res: Response, next: NextFunction) {
        const { content } = req.body;
        const userId = req.user.id; // Assuming user ID is available in req.user

        try {
            const text = await this.textService.createText(content, userId);
            res.status(HttpStatus.CREATED).send(success(MESSAGES.TEXT_CREATED_SUCCESSFULLY, text));
        } catch (error) {
            return next(error);
        }
    }

    async getText(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const text = await this.textService.getText(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.TEXT_FETCHED_SUCCESSFULLY, text));
        } catch (error) {
            return next(error);
        }
    }

    async updateText(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const { content } = req.body;

        try {
            const text = await this.textService.updateText(id, content);
            res.status(HttpStatus.OK).send(success(MESSAGES.TEXT_UPDATED_SUCCESSFULLY, text));
        } catch (error) {
            return next(error);
        }
    }

    async deleteText(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            await this.textService.deleteText(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } catch (error) {
            return next(error);
        }
    }
}
