import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserRepository from "./repository/user.repository";

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserResolver, UserService],
})
export class UserModule {}
