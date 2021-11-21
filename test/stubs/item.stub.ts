import Item from "../../src/item/entity/item.entity";

export const itemStub = (): Item => {
    return {
        id: 1,
        title: "New Item",
    };
};
