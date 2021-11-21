import { Test, TestingModule } from "@nestjs/testing";
import { ItemController } from "../../src/item/item.controller";
import { itemStub } from "../stubs/item.stub";
import { ItemService } from "../../src/item/item.service";
import Item from "../../src/item/entity/item.entity";

jest.mock("../../src/item/item.service");

describe("ItemController", () => {
    let controller: ItemController;
    let service: ItemService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            controllers: [ItemController],
            providers: [ItemService],
        }).compile();

        controller = module.get<ItemController>(ItemController);
        service = module.get<ItemService>(ItemService);
        jest.clearAllMocks();
    });

    it("Controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("Service should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("findOne call with value", () => {
        let res: Item;
        beforeEach(async () => {
            res = await controller.findOne(itemStub().id);
        });

        test("Should be called with id = 1", () => {
            // jest.spyOn(service, 'findOne').mockImplementation(() => itemStub());

            expect(service.findOne).toBeCalledWith(itemStub().id);
        });

        test("Should return correct item", () => {
            expect(res).toEqual(itemStub());
        });

        test("Should contain correct title", () => {
            expect(res).toMatchObject({ title: itemStub().title });
        });
    });

    describe("findAll call with value", () => {
        let resp: Item[];

        beforeEach(async () => {
            resp = await controller.findAll();
        });

        test("Should be called", () => {
            expect(service.findAll).toBeCalled();
        });

        test("Should return array of items", () => {
            expect(resp).toEqual(expect.arrayContaining([itemStub()]));
        });

        test("Should not contain incorrect id", () => {
            expect(resp).toMatchObject(expect.not.arrayContaining([{ ...itemStub(), id: itemStub().id + 1 }]));
        });
    });

    afterEach(async () => {
        await module.close();
    });
});
