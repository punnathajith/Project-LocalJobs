import { User } from "../../domain/entities/user/User";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<void>;
  findAll(options?: { skip?: number; limit?: number }): Promise<User[]>;
}