
export class Company {
  constructor(
    public companyName: string,
    public email: string,
    public password: string,
    public phone: string,
    public profileStatus: 'incomplete' | 'complete' | 'verified',
    public website?: string,
    public logoUrl?: string,
    public location?: string,
    public industry?: string,
    public description?: string,
    public foundedYear?: number,
    public companySize?: string,
    public postedJobs?: string[],
    public createdAt?: Date,
    public updatedAt?: Date,
    public id?: string
  ) {}
}
