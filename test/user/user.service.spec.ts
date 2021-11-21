import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "../../src/user/user.service";
import UserRepository from "../../src/user/repository/user.repository";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UserRepositoryMock } from "../../src/user/__mocks__/user.repository";
import { userStub } from "../stubs/user.stub";
import { MockType } from "../mocks/mockType";
import { Repository } from "typeorm";
import User from "../../src/user/entity/user.entity";

jest.mock("../../src/user/repository/user.repository");

describe("UserService", () => {
    let service: UserService;
    let repository: MockType<Repository<UserRepository>>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService, { provide: getRepositoryToken(UserRepository), useFactory: UserRepositoryMock }],
        }).compile();

        service = module.get<UserService>(UserService);
        repository = module.get(getRepositoryToken(UserRepository));
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("findAll call", () => {
        let resp: User[];
        beforeEach(async () => {
            resp = await service.findAll();
        });

        it("Should be called", () => {
            expect(repository.find).toBeCalled();
        });

        it("Should be equal to mocked value", () => {
            expect(resp).toEqual(expect.arrayContaining([userStub()]));
        });
    });
});
