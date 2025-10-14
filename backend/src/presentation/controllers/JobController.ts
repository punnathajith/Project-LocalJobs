import { Request,Response } from "express";
import { injectable } from "tsyringe";
import { CreateJob } from "../../application/usecases/jobUsecases/createJob";

@injectable()
export class JobController {
  constructor(private createJob: CreateJob) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const {
        jobTitle,
        closeDate,
        location,
        yearsOfExperience,
        salary,
        jobType,
        requiredSkills,
        jobDescription,
        applicationEmail
      } = req.body;

      const job = await this.createJob.execute({
        jobTitle,
        closeDate,
        location,
        yearsOfExperience,
        salary,
        jobType,
        requiredSkills,
        jobDescription,
        applicationEmail
      });

      res.status(201).json({
        success: true,
        message: "Job posted successfully",
        data: job
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: (error as Error).message
      });
    }
  }
}