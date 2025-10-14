import "reflect-metadata";
import { container } from "tsyringe";
import { IUserRepository} from "../../application/repositories/IUserRepository"
import { UserRepoMongo } from "../../infrastructure/repositories/userRepoMongo";
import { IJobRepository } from "../../application/repositories/IJobRepository";
import { JobRepoMongo } from "../../infrastructure/repositories/jobRepoMongo";  

container.register<IUserRepository>("UserRepository", {
  useClass: UserRepoMongo
});


container.register<IJobRepository>("JobRepository", {
  useClass: JobRepoMongo
});