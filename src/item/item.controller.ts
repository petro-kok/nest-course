import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import Item from "./entity/item.entity";

@Controller("item")
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Post()
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemService.create(createItemDto);
    }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.itemService.findOne(id);
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() updateItemDto: UpdateItemDto) {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.itemService.remove(id);
    }
}
