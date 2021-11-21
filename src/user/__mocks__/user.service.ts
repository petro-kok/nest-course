import { userStub } from "../../../test/stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
    create: jest.fn().mockImplementation(() => userStub()),
    findAll: jest.fn().mockImplementation(() => [userStub()]),
    findOne: jest.fn().mockImplementation(() => userStub()),
    update: jest.fn().mockImplementation(() => userStub()),
    remove: jest.fn().mockImplementation(() => userStub()),
});
