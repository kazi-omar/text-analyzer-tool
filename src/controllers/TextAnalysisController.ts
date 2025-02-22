import { Request, Response, NextFunction } from "express";
import { TextAnalysisService } from "@services/TextAnalysisService";
import { success } from "@utils/response";
import { MESSAGES } from "@utils/constants";
import HttpStatus from "@utils/httpStatus";

export class TextAnalysisController {
    private textAnalysisService: TextAnalysisService;

    constructor() {
        this.textAnalysisService = new TextAnalysisService();
    }

    async getTextAnalysis(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const analysis = await this.textAnalysisService.getTextAnalysis(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.TEXT_ANALYSIS_FETCHED_SUCCESSFULLY, analysis));
        } catch (error) {
            return next(error);
        }
    }

    async getWordCount(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const wordCount = await this.textAnalysisService.getWordCount(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.WORD_COUNT_FETCHED_SUCCESSFULLY, { wordCount }));
        } catch (error) {
            return next(error);
        }
    }

    async getCharCount(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const charCount = await this.textAnalysisService.getCharCount(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.CHAR_COUNT_FETCHED_SUCCESSFULLY, { charCount }));
        } catch (error) {
            return next(error);
        }
    }

    async getSentenceCount(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const sentenceCount = await this.textAnalysisService.getSentenceCount(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.SENTENCE_COUNT_FETCHED_SUCCESSFULLY, { sentenceCount }));
        } catch (error) {
            return next(error);
        }
    }

    async getParagraphCount(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const paragraphCount = await this.textAnalysisService.getParagraphCount(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.PARAGRAPH_COUNT_FETCHED_SUCCESSFULLY, { paragraphCount }));
        } catch (error) {
            return next(error);
        }
    }

    async getLongestWords(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const longestWords = await this.textAnalysisService.getLongestWords(id);
            res.status(HttpStatus.OK).send(success(MESSAGES.LONGEST_WORD_FETCHED_SUCCESSFULLY, { longestWords }));
        } catch (error) {
            return next(error);
        }
    }
}
