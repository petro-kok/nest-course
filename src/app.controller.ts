import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ItemService } from "./item/item.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly itemService: ItemService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
