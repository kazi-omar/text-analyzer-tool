import { Request, Response, NextFunction } from "express";

const setContentType = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Type", "application/json");
    next();
};

export default setContentType;
