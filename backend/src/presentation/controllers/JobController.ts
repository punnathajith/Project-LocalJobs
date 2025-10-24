import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { CreateJob } from "../../application/usecases/jobUsecases/createJob";

@injectable()
export class JobController {
  constructor(private createJob: CreateJob) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const user = (req as any).user;

      if (!user || !user.id || !user.type) {
        res.status(401).json({ message: "Unauthorized: Missing user details" });
        return;
      }

      // Dynamic handling of both user and company posters
      const postedBy =
        user.type === "Company" ? user.companyId || user.id : user.id;
      const posterType =
        user.type === "Company" ? "Company" : "User";

      const jobData = {
        ...req.body,
        postedBy,
        posterType,
      };

      console.log("Creating job with data:", jobData);

      const job = await this.createJob.execute(jobData);
      res.status(201).json(job);
    } catch (error) {
      console.error("Error creating job:", error);
      res.status(400).json({ message: (error as Error).message });
    }
  }
}

