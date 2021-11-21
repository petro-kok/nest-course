import { itemStub } from "../../../test/stubs/item.stub";

export const ItemService = jest.fn().mockReturnValue({
    create: jest.fn().mockImplementation(() => itemStub()),
    findAll: jest.fn().mockImplementation(() => [itemStub()]),
    findOne: jest.fn().mockImplementation(() => itemStub()),
    update: jest.fn().mockImplementation(() => itemStub()),
    remove: jest.fn().mockImplementation(() => itemStub()),
});
