export class Company {
  constructor(
    public id: string,
    public companyName: string,
    public email: string,
    public password: string,
    public profileStatus: 'incomplete' | 'complete' | 'verified',
    public description?: string,
    public logoUrl?: string,
    public location?: string
  ) {}
}
