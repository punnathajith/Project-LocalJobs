import {inject,injectable} from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class GetUserProfile {
  constructor(
    @inject("UserRepository")
    private userRepo: IUserRepository
  ) {}  
    async execute(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const { password, ...safeUser } = user as any;
    return safeUser;
  }
}