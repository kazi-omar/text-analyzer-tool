import { Router } from "express";
import { TextController } from "@controllers/TextController";
import authenticationMiddleware from "@middleware/authenticationMiddleware";
import authorizationMiddleware from "@middleware/authorizationMiddleware";

const router = Router();
const textController = new TextController();

/**
 * @swagger
 * /texts:
 *   post:
 *     summary: Create a new text
 *     tags: [Texts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "This is a sample text."
 *     responses:
 *       201:
 *         description: Text created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/texts", authenticationMiddleware, (req, res, next) => textController.createText(req, res, next));

/**
 * @swagger
 * /texts/{id}:
 *   get:
 *     summary: Get a text by ID
 *     tags: [Texts]
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
 *         description: Text fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.get("/texts/:id", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textController.getText(req, res, next));

/**
 * @swagger
 * /texts/{id}:
 *   put:
 *     summary: Update a text by ID
 *     tags: [Texts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The text ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Updated text content."
 *     responses:
 *       200:
 *         description: Text updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.put("/texts/:id", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textController.updateText(req, res, next));

/**
 * @swagger
 * /texts/{id}:
 *   delete:
 *     summary: Delete a text by ID
 *     tags: [Texts]
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
 *       204:
 *         description: Text deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Text not found
 */
router.delete("/texts/:id", authenticationMiddleware, authorizationMiddleware, (req, res, next) => textController.deleteText(req, res, next));

export default router;
