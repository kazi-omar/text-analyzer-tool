import { UpdateDateColumn, CreateDateColumn } from "typeorm";

export class SharedProp {
    @CreateDateColumn({ type: "timestamp" })
    createdDt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateDt: Date;
}
