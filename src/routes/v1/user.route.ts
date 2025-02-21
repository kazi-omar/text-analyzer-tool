import { Router } from "express";
import { UserController } from "@controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/users", (req, res, next) => userController.createUser(req, res, next));

export default router;
