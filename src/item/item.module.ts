import { Module } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemController } from "./item.controller";
import ItemRepository from "./repository/item.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import Item from "./entity/item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ItemRepository])],
    controllers: [ItemController],
    providers: [ItemService],
    exports: [ItemService],
})
export class ItemModule {}
