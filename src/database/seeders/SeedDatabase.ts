import { AppDataSource } from "@config/database";
import { UserService } from "@services/UserService";
import { Text } from "@models/Text";
import { TextAnalysis } from "@models/TextAnalysis";
import { MESSAGES } from "@utils/constants";

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
        await textRepository.save(text);

        const textAnalysis = new TextAnalysis();
        textAnalysis.text = text;
        textAnalysis.word_count = 7;
        textAnalysis.char_count = 34;
        textAnalysis.sentence_count = 1;
        textAnalysis.paragraph_count = 1;
        textAnalysis.longest_word = "analysis";
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
