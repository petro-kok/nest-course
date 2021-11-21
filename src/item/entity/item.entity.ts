import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("items")
export default class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;
}
