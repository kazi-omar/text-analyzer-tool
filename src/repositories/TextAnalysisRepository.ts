import { Repository } from "typeorm";
import { TextAnalysis } from "@models/TextAnalysis";
import { AppDataSource } from "@config/database";

export class TextAnalysisRepository {
    private repository: Repository<TextAnalysis>;

    constructor() {
        this.repository = AppDataSource.getRepository(TextAnalysis);
    }

    async findByTextId(textId: string): Promise<TextAnalysis | null> {
        return await this.repository.findOne({ where: { text: { id: textId } } });
    }

    async save(textAnalysis: TextAnalysis): Promise<TextAnalysis> {
        return await this.repository.save(textAnalysis);
    }
}
