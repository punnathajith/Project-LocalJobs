import { User } from "../../../domain/entities/user/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export class RegisterUser {
  constructor(
    @inject("UserRepository")
    private userRepo: IUserRepository
  ) {}

  async execute(userData: {
    name: string;
    email: string;
    password: string;
    profileStatus?: 'incomplete' | 'complete' | 'verified';
    bio?: string;
    avatarUrl?: string;
    location?: string;
  }): Promise<User> {
    const existingUser = await this.userRepo.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const newUser = new User(
      "",
      userData.name,
      userData.email,
      userData.password,
      userData.profileStatus || "incomplete",
      userData.bio,
      userData.avatarUrl,
      userData.location
    );

    return this.userRepo.createUser(newUser);
  }
}
