import User from "../../src/user/entity/user.entity";

export const userStub = (): User => {
    return {
        id: 1,
        firstName: "John",
        lastName: "Doe",
    };
};
