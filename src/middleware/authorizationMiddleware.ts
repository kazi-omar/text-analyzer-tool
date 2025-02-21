import { Request, Response, NextFunction } from "express";
import { TextRepository } from "@repositories/TextRepository";
import { TextAnalysisRepository } from "@repositories/TextAnalysisRepository";
import HttpStatus from "@utils/httpStatus";
import { ErrorName } from "@utils/constants";

const textRepository = new TextRepository();
const textAnalysisRepository = new TextAnalysisRepository();

const authorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user.id;
    const { id } = req.params;

    try {
        // Check if the resource is a text
        const text = await textRepository.findById(id);
        if (text) {
            if (text.user.id === userId) {
                return next();
            } else {
                res.status(HttpStatus.UNAUTHORIZED).send({ success: false, message: ErrorName.UNAUTHORIZED });
                return;
            }
        }

        // Check if the resource is a text analysis
        const textAnalysis = await textAnalysisRepository.findByTextId(id);
        if (textAnalysis) {
            if (textAnalysis.text.user.id === userId) {
                return next();
            } else {
                res.status(HttpStatus.UNAUTHORIZED).send({ success: false, message: ErrorName.UNAUTHORIZED });
                return;
            }
        }

        // If neither resource is found, proceed to the next middleware
        return next();
    } catch (error) {
        next(error);
    }
};

export default authorizationMiddleware;
