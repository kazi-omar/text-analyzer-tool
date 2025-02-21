import express from "express";
import userV1 from "./v1/user.route";

const router = express.Router();
router.use("/v1", userV1);

export default router;
