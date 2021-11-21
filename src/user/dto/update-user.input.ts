import { CreateUserInput } from "./create-user.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field(() => Int, { description: "User id" })
    id: number;
}

/*
    input UpdateUserInput {
        """User id"""
        id: Int!

        """First name"""
        firstName: String

        """Last name"""
        lastName: String
    }
*/
