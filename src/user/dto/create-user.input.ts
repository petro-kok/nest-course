import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    @Field(() => String, { description: "First name" })
    firstName: string;

    @Field(() => String, { description: "Last name" })
    lastName: string;
}

/*
    input CreateUserInput {
        """First name"""
        firstName: String!

        """Last name"""
        lastName: String!
    }
*/
