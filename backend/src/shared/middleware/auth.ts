import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = verifyAccessToken(token);
    (req as any).user = decoded; 
    next();
  } catch {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
