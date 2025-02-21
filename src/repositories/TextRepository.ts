import { Repository } from "typeorm";
import { Text } from "@models/Text";
import { AppDataSource } from "@config/database";

export class TextRepository {
    private repository: Repository<Text>;

    constructor() {
        this.repository = AppDataSource.getRepository(Text);
    }

    async findById(id: string): Promise<Text | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async save(text: Text): Promise<Text> {
        return await this.repository.save(text);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
