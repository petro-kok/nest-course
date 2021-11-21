import { userStub } from "../../../test/stubs/user.stub";
import { Repository } from "typeorm";
import { MockType } from "../../../test/mocks/mockType";

export const UserRepositoryMock: () => MockType<Repository<any>> = jest.fn(() => ({
    save: jest.fn().mockImplementation(() => userStub()),
    find: jest.fn().mockImplementation(() => [userStub()]),
    findOne: jest.fn().mockImplementation(() => userStub()),
    update: jest.fn().mockImplementation(() => userStub()),
    delete: jest.fn().mockImplementation(() => userStub()),
}));
