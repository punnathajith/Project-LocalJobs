import { IUserRepository } from '../../application/repositories/IUserRepository';
import { User } from '../../domain/entities/user/User'; 
import { UserModel } from '../db/models/user.model';
import { injectable } from "tsyringe";


@injectable()
export class UserRepoMongo implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).lean<User>().exec();
    return user ? this.mapToEntity(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email }).lean<User>().exec();
    return user ? this.mapToEntity(user) : null;
  }

  async createUser(user: User): Promise<User> {
    const created = await UserModel.create(user);
    return this.mapToEntity(created.toObject());
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const updated = await UserModel.findByIdAndUpdate(id, updates, { new: true })
      .lean<User>()
      .exec();
    return updated ? this.mapToEntity(updated) : null;
  }

  async deleteUser(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id).exec();
  }

  async findAll(options?: { skip?: number; limit?: number }): Promise<User[]> {
    const { skip = 0, limit = 10 } = options || {};
    const users = await UserModel.find().skip(skip).limit(limit).lean<User[]>().exec();
    return users.map((u) => this.mapToEntity(u));
  }

  private mapToEntity(userDoc: any): User {
  return new User(
    userDoc._id.toString(),
    userDoc.name,
    userDoc.email,
    userDoc.password,
    userDoc.profileStatus,   
    userDoc.bio,
    userDoc.avatarUrl,
    userDoc.location
  );
}

}