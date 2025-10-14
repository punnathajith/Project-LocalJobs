import { Job } from "../../domain/entities/Job/Job";

export interface IJobRepository {
  findById(id: string): Promise<Job | null>;
  createJob(job: Job): Promise<Job>;
  updateJob(id: string, updates: Partial<Job>): Promise<Job | null>;
  deleteJob(id: string): Promise<void>;
  findAll(options?: { skip?: number; limit?: number }): Promise<Job[]>;
}