import { Test, TestingModule } from "@nestjs/testing";
import { UserResolver } from "../../src/user/user.resolver";
import { UserService } from "../../src/user/user.service";
import User from "../../src/user/entity/user.entity";
import { userStub } from "../stubs/user.stub";

jest.mock("../../src/user/user.service");

describe("UserResolver", () => {
    let resolver: UserResolver;
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserResolver, UserService],
        }).compile();

        resolver = module.get<UserResolver>(UserResolver);
        service = module.get<UserService>(UserService);
    });

    it("Should be defined", () => {
        expect(resolver).toBeDefined();
    });

    describe("findOne call with value", () => {
        let res: User;
        beforeEach(async () => {
            res = await resolver.findOne(userStub().id);
        });

        test("Should be called with id = 1", () => {
            expect(service.findOne).toBeCalledWith(userStub().id);
        });

        test("Should return correct item", () => {
            expect(res).toEqual(userStub());
        });

        test("Should contain correct title", () => {
            expect(res).toMatchObject({ firstName: userStub().firstName });
        });
    });

    describe("findAll call with value", () => {
        let resp: User[];

        beforeEach(async () => {
            resp = await resolver.findAll();
        });

        test("Should be called", () => {
            expect(service.findAll).toBeCalled();
        });

        test("Should return array of items", () => {
            expect(resp).toEqual(expect.arrayContaining([userStub()]));
        });

        test("Should not contain incorrect id", () => {
            expect(resp).toMatchObject(expect.not.arrayContaining([{ ...userStub(), id: userStub().id + 1 }]));
        });
    });
});
