import { Router } from "express";
import { UserController } from "@controllers/UserController";
import authenticationMiddleware from "@middleware/authenticationMiddleware";

const router = Router();
const userController = new UserController();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/users", (req, res, next) => userController.createUser(req, res, next));


/**
 * @swagger
 * /users/reports:
 *   get:
 *     summary: Get analysis report for logged-in user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analysis report fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/users/reports", authenticationMiddleware, (req, res, next) => userController.getUserReport(req, res, next));

export default router;
