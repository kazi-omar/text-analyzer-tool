import { Router } from "express";
import { TextAnalysisController } from "@controllers/TextAnalysisController";
import authenticationMiddleware from "@middleware/authenticationMiddleware";
import authorizationMiddleware from "@middleware/authorizationMiddleware";

const router = Router();
const textAnalysisController = new TextAnalysisController();

/**
 * @swagger
 * /texts/{id}/analysis:
 *   get:
 *     summary: Get full text analysis
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Text analysis fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/analysis", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getTextAnalysis(req, res, next));

/**
 * @swagger
 * /texts/{id}/word-count:
 *   get:
 *     summary: Get word count
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Word count fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/word-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getWordCount(req, res, next));

/**
 * @swagger
 * /texts/{id}/char-count:
 *   get:
 *     summary: Get character count
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Character count fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/char-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getCharCount(req, res, next));

/**
 * @swagger
 * /texts/{id}/sentence-count:
 *   get:
 *     summary: Get sentence count
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Sentence count fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/sentence-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getSentenceCount(req, res, next));

/**
 * @swagger
 * /texts/{id}/paragraph-count:
 *   get:
 *     summary: Get paragraph count
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Paragraph count fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/paragraph-count", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getParagraphCount(req, res, next));

/**
 * @swagger
 * /texts/{id}/longest-words:
 *   get:
 *     summary: Get longest words
 *     tags: [Text Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     responses:
 *       200:
 *         description: Longest words fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id/longest-words", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textAnalysisController.getLongestWords(req, res, next));

export default router;
