export class Job {
  constructor(
    public jobTitle: string,
    public closeDate: Date,
    public location: string,
    public yearsOfExperience: number,
    public salary: string,
    public jobType: string,
    public requiredSkills: string[],
    public jobDescription: string,
    public applicationEmail: string,
    public createdAt: Date,
    public updatedAt: Date, 
    public status: "Open" | "Closed" | "Expired" | "Draft" = "Open",
    public companyId?: string,
    public postedBy?: string,
    public posterType?: "User" | "Company",
    public applicants?: string[],
    public id?: string
  ) {}
}



//options add cheyyan undenkil ivide add cheyyam

//export class Job {
//   constructor(
//     public jobTitle: string,
//     public closeDate: Date,
//     public location: string,
//     public yearsOfExperience: number,
//     public salary: string,
//     public jobType: string,
//     public requiredSkills: string[],
//     public jobDescription: string,
//     public applicationEmail: string,
//     public createdAt: Date,
//     public status: "Open" | "Closed" | "Expired" | "Draft" = "Open",
//     public companyId?: string,  // Reference if posted by company
//     public postedBy?: string,   // Reference if posted by user
//     public posterType?: "User" | "Company",
//     public applicants?: string[], // array of User IDs who applied
//     public id?: string
//   ) {}
// }

// 🧠 Goal

// When a user posts a job, they must pay a holding amount.
// ➡ The website/platform holds the funds (escrow) securely.
// ➡ When the job is completed successfully, the amount is released to the worker (consumer user).
// ➡ If the job fails or is cancelled, the amount is refunded to the job poster.