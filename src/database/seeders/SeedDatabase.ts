import { AppDataSource } from "@config/database";
import { UserService } from "@services/UserService";
import { Text } from "@models/Text";
import { TextAnalysis } from "@models/TextAnalysis";
import { MESSAGES } from "@utils/constants";
import {TextAnalysisUtility} from "@utils/TextAnalysisUtility";

const seedDatabase = async () => {
    await AppDataSource.initialize();

    const userService = new UserService();
    const textRepository = AppDataSource.getRepository(Text);
    const textAnalysisRepository = AppDataSource.getRepository(TextAnalysis);

    try {
        const user = await userService.createUser("John Doe", "john.doe@example.com");

        const text = new Text();
        text.user = user;
        text.text_content = "This is a sample text for analysis.";
        const savedText = await textRepository.save(text);

        const textAnalysis = new TextAnalysis();
        textAnalysis.text = savedText;
        textAnalysis.word_count = TextAnalysisUtility.getWordCount(text.text_content);
        textAnalysis.char_count = TextAnalysisUtility.getCharCount(text.text_content);
        textAnalysis.sentence_count = TextAnalysisUtility.getSentenceCount(text.text_content);
        textAnalysis.paragraph_count = TextAnalysisUtility.getParagraphCount(text.text_content);
        textAnalysis.longest_words = TextAnalysisUtility.getLongestWords(text.text_content);
        await textAnalysisRepository.save(textAnalysis);

        console.log(MESSAGES.DATABASE_SEEDED_SUCCESSFULLY);
    } catch (error: any) {
        console.error(MESSAGES.ERROR_SEEDING_DATABASE, error.message);
    } finally {
        process.exit(0);
    }
};

seedDatabase().catch(error => {
    console.error(MESSAGES.ERROR_SEEDING_DATABASE, error);
    process.exit(1);
});
