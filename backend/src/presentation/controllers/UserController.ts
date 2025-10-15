import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { RegisterUser } from "../../application/usecases/userUsecases/registerUser";
import { LoginUser } from "../../application/usecases/userUsecases/loginUser";
import { AuthService } from "../../shared/service/AuthService";
import { GetUserProfile } from "../../application/usecases/userUsecases/getUserProfile";

@injectable()
export class UserController {
  constructor(
    private registerUser: RegisterUser,
    private loginUser: LoginUser,
    private getUserProfile: GetUserProfile
  ) {}

  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.registerUser.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await this.loginUser.execute(email, password);

      if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      const { accessToken, refreshToken } = AuthService.issueTokens({
        id: user.id,
        email: user.email,
        type: "User",
      });

      AuthService.setRefreshToken(res, refreshToken);
      res.status(200).json({
        accessToken,
        user: { id: user.id, name: user.name, email: user.email, type: "User" },
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async refresh(req: Request, res: Response) {
    return AuthService.refresh(req, res);
  }

  async getProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?.id; 
      const user = await this.getUserProfile.execute(userId);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: (error as Error).message });
    }
  }
}
