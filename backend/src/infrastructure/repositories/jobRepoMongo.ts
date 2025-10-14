import { Job } from "../../domain/entities/Job/Job";
import { IJobRepository } from "../../application/repositories/IJobRepository";
import { injectable } from "tsyringe";
import { JobModel } from "../db/models/job.model";

@injectable()
export class JobRepoMongo implements IJobRepository {
  async findById(id: string): Promise<Job | null> {
    const job = await JobModel.findById(id).lean().exec();
    return job ? this.mapToEntity(job) : null;
  }

  async createJob(job: Job): Promise<Job> {
    const created = await JobModel.create(job);
    return this.mapToEntity(created.toObject());
  }

  async updateJob(id: string, updates: Partial<Job>): Promise<Job | null> {
    const updated = await JobModel.findByIdAndUpdate(id, updates, { new: true })
      .lean()
      .exec();
    return updated ? this.mapToEntity(updated) : null;
  }

  async deleteJob(id: string): Promise<void> {
    await JobModel.findByIdAndDelete(id).exec();
  }

  async findAll(options?: { skip?: number; limit?: number }): Promise<Job[]> {
    const { skip = 0, limit = 10 } = options || {};
    const jobs = await JobModel.find().skip(skip).limit(limit).lean().exec();
    return jobs.map((j) => this.mapToEntity(j));
  }

  private mapToEntity(jobDoc: any): Job {
    return new Job(
      jobDoc.jobTitle,
      jobDoc.closeDate,
      jobDoc.location,
      jobDoc.yearsOfExperience,
      jobDoc.salary,
      jobDoc.jobType,
      jobDoc.requiredSkills,
      jobDoc.jobDescription,
      jobDoc.applicationEmail,
      jobDoc.createdAt,
      jobDoc._id?.toString()
    );
  }
}
