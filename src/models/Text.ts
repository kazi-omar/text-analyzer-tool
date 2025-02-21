import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { TextAnalysis } from "./TextAnalysis";
import { SharedProp } from "../helpers/SharedProp";

@Entity()
export class Text extends SharedProp {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, user => user.texts)
    user: User;

    @Column("text")
    text_content: string;

    @OneToMany(() => TextAnalysis, analysis => analysis.text)
    analyses: TextAnalysis[];
}
