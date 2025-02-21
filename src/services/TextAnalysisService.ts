import { TextAnalysisRepository } from "@repositories/TextAnalysisRepository";
import { TextRepository } from "@repositories/TextRepository";
import { TextAnalysis } from "@models/TextAnalysis";
import NotFoundError from "@errors/http404Error";
import { VALIDATIONMESSAGES } from "@utils/constants";

export class TextAnalysisService {
    private textAnalysisRepository: TextAnalysisRepository;
    private textRepository: TextRepository;

    constructor() {
        this.textAnalysisRepository = new TextAnalysisRepository();
        this.textRepository = new TextRepository();
    }

    async getTextAnalysis(textId: string): Promise<TextAnalysis> {
        const text = await this.textRepository.findById(textId);
        if (!text) {
            throw new NotFoundError(VALIDATIONMESSAGES.TEXT_NOT_FOUND);
        }

        const analysis = await this.textAnalysisRepository.findByTextId(textId);
        if (!analysis) {
            throw new NotFoundError(VALIDATIONMESSAGES.TEXT_ANALYSIS_NOT_FOUND);
        }

        return analysis;
    }

    async getWordCount(textId: string): Promise<number> {
        const analysis = await this.getTextAnalysis(textId);
        return analysis.word_count;
    }

    async getCharCount(textId: string): Promise<number> {
        const analysis = await this.getTextAnalysis(textId);
        return analysis.char_count;
    }

    async getSentenceCount(textId: string): Promise<number> {
        const analysis = await this.getTextAnalysis(textId);
        return analysis.sentence_count;
    }

    async getParagraphCount(textId: string): Promise<number> {
        const analysis = await this.getTextAnalysis(textId);
        return analysis.paragraph_count;
    }

    async getLongestWords(textId: string): Promise<string[]> {
        const analysis = await this.getTextAnalysis(textId);
        return analysis.longest_words;
    }
}
