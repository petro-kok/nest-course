import { Test, TestingModule } from "@nestjs/testing";
import { ItemService } from "../../src/item/item.service";
import ItemRepository from "../../src/item/repository/item.repository";

describe("ItemService", () => {
    let service: ItemService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ItemService, ItemRepository],
        }).compile();

        service = module.get<ItemService>(ItemService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
