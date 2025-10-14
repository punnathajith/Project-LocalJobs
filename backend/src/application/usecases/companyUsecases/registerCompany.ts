// // application/usecases/auth/RegisterCompany.ts
// import { injectable, inject } from "tsyringe";
// import { ICompanyRepository } from "../../repositories/ICompanyRepository";
// import { Company } from "../../../domain/entities/company/Company";

// @injectable()
// export class RegisterCompany {
//   constructor(
//     @inject("CompanyRepository") private companyRepo: ICompanyRepository
//   ) {}

//   async execute(companyData: {
//     companyName: string;
//     email: string;
//     password: string;
//     bio?: string;
//     avatarUrl?: string;
//     location?: string;
//   }): Promise<Company> {
//     const existingCompany = await this.companyRepo.findByEmail(companyData.email);
//     if (existingCompany) throw new Error("Email already in use");

//     const newCompany = new Company(
//       "",
//       companyData.companyName,
//       companyData.email,
//       companyData.password,
//       "incomplete",
//       companyData.bio,
//       companyData.avatarUrl,
//       companyData.location
//     );

//     return this.companyRepo.createCompany(newCompany);
//   }
// }
