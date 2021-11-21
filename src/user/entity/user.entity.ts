import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    firstName: string;

    @Column("varchar")
    lastName: string;
}
