import { Router } from "express";
import { TextAnalysisController } from "@controllers/TextAnalysisController";
import authenticationMiddleware from "@middleware/authenticationMiddleware";
import authorizationMiddleware from "@middleware/authorizationMiddleware";

const router = Router();
const textAnalysisController = new TextAnalysisController();

router.get("/texts/:id/analysis", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getTextAnalysis(req, res, next));
router.get("/texts/:id/word-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getWordCount(req, res, next));
router.get("/texts/:id/char-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getCharCount(req, res, next));
router.get("/texts/:id/sentence-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getSentenceCount(req, res, next));
router.get("/texts/:id/paragraph-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getParagraphCount(req, res, next));
router.get("/texts/:id/longest-words", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getLongestWords(req, res, next));

export default router;
