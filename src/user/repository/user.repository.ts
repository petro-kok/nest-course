import { EntityRepository, Repository } from "typeorm";
import User from "../entity/user.entity";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
