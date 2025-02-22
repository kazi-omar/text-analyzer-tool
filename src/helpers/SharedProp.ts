import { UpdateDateColumn, CreateDateColumn } from "typeorm";

export class SharedProp {
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}
