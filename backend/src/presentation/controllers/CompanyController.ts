// import { injectable } from "tsyringe";
// import { Request, Response } from "express";
// import { RegisterCompany } from "../../application/usecases/companyUsecases/registerCompany";
// import { LoginCompany } from "../../application/usecases/companyUsecases/loginCompany";
// import { AuthService } from "../../shared/services/AuthService";

// @injectable()
// export class CompanyController {
//   constructor(
//     private registerCompany: RegisterCompany,
//     private loginCompany: LoginCompany
//   ) {}

//   async register(req: Request, res: Response): Promise<void> {
//     try {
//       const company = await this.registerCompany.execute(req.body);
//       res.status(201).json(company);
//     } catch (error) {
//       res.status(400).json({ message: (error as Error).message });
//     }
//   }

//   async login(req: Request, res: Response): Promise<void> {
//     try {
//       const { email, password } = req.body;
//       const company = await this.loginCompany.execute(email, password);

//       if (!company) {
//         res.status(401).json({ message: "Invalid credentials" });
//         return;
//       }

//       const { accessToken, refreshToken } = AuthService.issueTokens({
//         id: company.id,
//         email: company.email,
//         role: "employer",
//       });

//       AuthService.setRefreshToken(res, refreshToken);

//       res.status(200).json({
//         accessToken,
//         company: { id: company.id, name: company.name, email: company.email },
//       });
//     } catch (error) {
//       res.status(500).json({ message: (error as Error).message });
//     }
//   }

//   async refresh(req: Request, res: Response) {
//     return AuthService.refresh(req, res);
//   }
// }
