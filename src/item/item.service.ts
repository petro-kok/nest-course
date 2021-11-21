import { Injectable } from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import ItemRepository from "./repository/item.repository";
import Item from "./entity/item.entity";

@Injectable()
export class ItemService {
    constructor(@InjectRepository(ItemRepository) private itemRepository: ItemRepository) {}

    async create(createItemDto: CreateItemDto) {
        const itemToSave = new Item();

        itemToSave.title = createItemDto.title;

        return await this.itemRepository.save(itemToSave);
    }

    async findAll(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    findOne(id: number) {
        return this.itemRepository.findOne(id);
    }

    update(id: number, updateItemDto: UpdateItemDto) {
        const itemToSave = new Item();

        itemToSave.title = updateItemDto.title;
        return this.itemRepository.update(id, itemToSave);
    }

    remove(id: number) {
        return this.itemRepository.delete(id);
    }
}
