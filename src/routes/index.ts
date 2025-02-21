import express from "express";
import userV1 from "./v1/user.route";
import textV1 from "./v1/text.route";
import textAnalysisV1 from "./v1/textAnalysis.route";

const router = express.Router();
router.use("/v1", userV1);
router.use("/v1", textV1);
router.use("/v1", textAnalysisV1);

export default router;
