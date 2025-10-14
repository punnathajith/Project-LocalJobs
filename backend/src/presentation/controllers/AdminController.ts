// import { injectable } from "tsyringe";
// import { Request, Response } from "express";
// import { LoginAdmin } from "../../application/usecases/adminUsecases/loginAdmin";
// import { AuthService } from "../../shared/services/AuthService";

// @injectable()
// export class AdminController {
//   constructor(private loginAdmin: LoginAdmin) {}

//   async login(req: Request, res: Response): Promise<void> {
//     try {
//       const { email, password } = req.body;
//       const admin = await this.loginAdmin.execute(email, password);

//       if (!admin) {
//         res.status(401).json({ message: "Invalid credentials" });
//         return;
//       }

//       const { accessToken, refreshToken } = AuthService.issueTokens({
//         id: admin.id,
//         email: admin.email,
//         role: "admin",
//       });

//       AuthService.setRefreshToken(res, refreshToken);

//       res.status(200).json({
//         accessToken,
//         admin: { id: admin.id, name: admin.name, email: admin.email },
//       });
//     } catch (error) {
//       res.status(500).json({ message: (error as Error).message });
//     }
//   }

//   async refresh(req: Request, res: Response) {
//     return AuthService.refresh(req, res);
//   }
// }
