import { Injectable } from "@nestjs/common";
import { UpdateUserInput } from "./dto/update-user.input";
import { InjectRepository } from "@nestjs/typeorm";
import UserRepository from "./repository/user.repository";
import User from "./entity/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UserInputError } from "apollo-server-express";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) {}

    async create(createUserDto: CreateUserInput) {
        const userToSave = new User();
        const { firstName, lastName } = createUserDto;

        userToSave.firstName = firstName;
        userToSave.lastName = lastName;

        return await this.userRepository.save(userToSave);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne(id);

        if (!user) throw new UserInputError("Not found");

        return user;
    }

    async update(id: number, updateUserDto: UpdateUserInput) {
        const userToUpdate = new User();
        const { firstName, lastName } = updateUserDto;

        userToUpdate.firstName = firstName;
        userToUpdate.lastName = lastName;

        await this.userRepository.update(id, userToUpdate);

        return this.userRepository.findOne(id);
    }

    async remove(id: number) {
        const user = await this.userRepository.findOne(id);
        await this.userRepository.delete(user);
        return user;
    }
}
