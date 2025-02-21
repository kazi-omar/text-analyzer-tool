import { TextRepository } from "@repositories/TextRepository";
import { UserRepository } from "@repositories/UserRepository";
import { Text } from "@models/Text";
import BadRequestError from "@errors/http400Error";
import NotFoundError from "@errors/http404Error";
import { MESSAGES, VALIDATIONMESSAGES } from "@utils/constants";
import {TextAnalysisRepository} from "@repositories/TextAnalysisRepository";
import {TextAnalysis} from "@models/TextAnalysis";
import {TextAnalysisUtility} from "@utils/TextAnalysisUtility";

export class TextService {
    private textRepository: TextRepository;
    private userRepository: UserRepository;
    private textAnalysisRepository: TextAnalysisRepository;

    constructor() {
        this.textRepository = new TextRepository();
        this.userRepository = new UserRepository();
        this.textAnalysisRepository = new TextAnalysisRepository();
    }

    async createText(content: string, userId: string): Promise<Text> {
        if (!content) {
            throw new BadRequestError(VALIDATIONMESSAGES.CONTENT_REQUIRED);
        }

        if (!userId) {
            throw new BadRequestError(VALIDATIONMESSAGES.USER_ID_REQUIRED);
        }

        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new NotFoundError(VALIDATIONMESSAGES.USER_NOT_FOUND);
        }

        const text = new Text();
        text.text_content = content;
        text.user = user;

        const savedText = await this.textRepository.save(text);

        const textAnalysis = new TextAnalysis();
        textAnalysis.text = savedText;
        textAnalysis.word_count = TextAnalysisUtility.getWordCount(content);
        textAnalysis.char_count = TextAnalysisUtility.getCharCount(content);
        textAnalysis.sentence_count = TextAnalysisUtility.getSentenceCount(content);
        textAnalysis.paragraph_count = TextAnalysisUtility.getParagraphCount(content);
        textAnalysis.longest_words = TextAnalysisUtility.getLongestWords(content);

        await this.textAnalysisRepository.save(textAnalysis);

        return savedText;
    }

    async getText(id: string): Promise<Text> {
        const text = await this.textRepository.findById(id);
        if (!text) {
            throw new NotFoundError(VALIDATIONMESSAGES.TEXT_NOT_FOUND);
        }
        return text;
    }

    async updateText(id: string, content: string): Promise<Text> {
        const text = await this.textRepository.findById(id);
        if (!text) {
            throw new NotFoundError(VALIDATIONMESSAGES.TEXT_NOT_FOUND);
        }

        text.text_content = content;
        return await this.textRepository.save(text);
    }

    async deleteText(id: string): Promise<void> {
        const text = await this.textRepository.findById(id);
        if (!text) {
            throw new NotFoundError(VALIDATIONMESSAGES.TEXT_NOT_FOUND);
        }

        await this.textRepository.delete(id);
    }
}
