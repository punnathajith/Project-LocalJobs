import jwt from "jsonwebtoken";

export interface TokenPayload {
  id: string;
  email: string;
  type: "User" | "Company" | "Admin";
}

export const generateAccessToken = (payload: TokenPayload) => {
  const ACCESS_SECRET = process.env.ACCESS_SECRET as string;
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: TokenPayload) => {
  const REFRESH_SECRET = process.env.REFRESH_SECRET as string;
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string): TokenPayload => {
  const ACCESS_SECRET = process.env.ACCESS_SECRET as string;
  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  const REFRESH_SECRET = process.env.REFRESH_SECRET as string;
  return jwt.verify(token, REFRESH_SECRET) as TokenPayload;
};

