import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Text } from "./Text";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Text, text => text.user)
    texts: Text[];
}
