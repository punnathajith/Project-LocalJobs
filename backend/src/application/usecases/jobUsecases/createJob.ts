import { Job } from "../../../domain/entities/Job/Job";
import { IJobRepository } from "../../repositories/IJobRepository";
import { injectable, inject } from "tsyringe";

interface ICreateJobDTO {
  jobTitle: string;
  closeDate: Date;
  location: string;
  yearsOfExperience: number;
  salary: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  requiredSkills: string[];
  jobDescription: string;
  applicationEmail: string;
  postedBy: string;          
  posterType: "User" | "Company"; 
}

@injectable()
export class CreateJob {
  constructor(
    @inject("JobRepository")
    private jobRepo: IJobRepository
  ) {}

  async execute(jobData: ICreateJobDTO): Promise<Job> {

    const newJob = new Job(
      jobData.jobTitle,
      jobData.closeDate,
      jobData.location,
      jobData.yearsOfExperience,
      jobData.salary,
      jobData.jobType,
      jobData.requiredSkills,
      jobData.jobDescription,
      jobData.applicationEmail,
      new Date() ,
      jobData.postedBy,
      jobData.posterType
    );

    return this.jobRepo.createJob(newJob);
  }
}