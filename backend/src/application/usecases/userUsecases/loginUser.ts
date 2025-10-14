import { User } from "../../../domain/entities/user/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export class LoginUser {
  constructor(
     @inject("UserRepository")
    private userRepo: IUserRepository) {}

  async execute(email: string, password: string): Promise<User | null> {
    const user = await this.userRepo.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}