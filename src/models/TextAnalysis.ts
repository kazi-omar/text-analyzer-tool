import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Text } from "@models/Text";
import { SharedProp } from "@helpers/SharedProp";

@Entity()
export class TextAnalysis extends SharedProp {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Text, text => text.analyses)
    text: Text;

    @Column("int")
    word_count: number;

    @Column("int")
    char_count: number;

    @Column("int")
    sentence_count: number;

    @Column("int")
    paragraph_count: number;

    @Column("simple-array")
    longest_words: string[];
}
