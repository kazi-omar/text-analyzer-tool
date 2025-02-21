import { Router } from "express";
import { TextController } from "@controllers/TextController";
import authenticationMiddleware from "@middleware/authenticationMiddleware";

const router = Router();
const textController = new TextController();

router.post("/texts", authenticationMiddleware, (req, res, next) => textController.createText(req, res, next));
router.get("/texts/:id", authenticationMiddleware, (req, res, next) => textController.getText(req, res, next));
router.put("/texts/:id", authenticationMiddleware, (req, res, next) => textController.updateText(req, res, next));
router.delete("/texts/:id", authenticationMiddleware, (req, res, next) => textController.deleteText(req, res, next));

export default router;
