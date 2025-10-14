// src/shared/services/AuthService.ts
import { Request, Response } from "express";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { TokenPayload } from "../utils/jwt";

export class AuthService {
  static setRefreshToken(res: Response, refreshToken: string) {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }

  static issueTokens(payload: TokenPayload) {
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    return { accessToken, refreshToken };
  }

  static refresh(req: Request, res: Response) {
    try {
      const token = req.cookies?.refreshToken || req.body.refreshToken;
      if (!token) {
        return res.status(401).json({ message: "No refresh token provided" });
      }

      const decoded = verifyRefreshToken(token);

      const newAccessToken = generateAccessToken({
        id: decoded.id,
        email: decoded.email,
        type: decoded.type,
      });

      return res.json({ accessToken: newAccessToken });
    } catch {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
  }
}
