import { TextRepository } from "@repositories/TextRepository";
import { UserRepository } from "@repositories/UserRepository";
import { Text } from "@models/Text";
import BadRequestError from "@errors/http400Error";
import NotFoundError from "@errors/http404Error";
import { MESSAGES, VALIDATIONMESSAGES } from "@utils/constants";

export class TextService {
    private textRepository: TextRepository;
    private userRepository: UserRepository;

    constructor() {
        this.textRepository = new TextRepository();
        this.userRepository = new UserRepository();
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

        return await this.textRepository.save(text);
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
