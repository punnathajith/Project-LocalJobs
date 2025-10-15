import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { CreateJob } from "../../application/usecases/jobUsecases/createJob";

@injectable()
export class JobController {
  constructor(private createJob: CreateJob) {}

  async create(req: Request, res: Response) {
    try {
      const { id, type } = (req as any).user; 

      const jobData = {
        ...req.body,
        postedBy: id,
        posterType: type,
      };

      const job = await this.createJob.execute(jobData);
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}
