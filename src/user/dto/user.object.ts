import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class UserObject {
    @Field(() => Int, { description: "User id" })
    id: number;

    @Field(() => String, { description: "First name" })
    firstName: string;

    @Field(() => String, { description: "Last name" })
    lastName: string;
}

/*
    type UserObject {
        """User id"""
        id: Int!

        """First name"""
        firstName: String!

        """Last name"""
        lastName: String!
    }
*/
