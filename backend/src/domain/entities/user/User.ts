export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public profileStatus: 'incomplete' | 'complete' | 'verified',
    public bio?: string,
    public avatarUrl?: string,
    public location?: string
  ) {}
}
