export class Job{
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
    public id?: string 
  ) {}
}