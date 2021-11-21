import { EntityRepository, Repository } from "typeorm";
import Item from "../entity/item.entity";

@EntityRepository(Item)
export default class ItemRepository extends Repository<Item> {}
