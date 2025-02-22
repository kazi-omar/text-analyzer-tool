import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Text } from "@models/Text";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Text, text => text.user)
    texts: Text[];
}
