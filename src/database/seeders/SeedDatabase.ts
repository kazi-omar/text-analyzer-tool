import { AppDataSource } from "../../config/database";
import { User } from "../../models/User";
import { Text } from "../../models/Text";
import { TextAnalysis } from "../../models/TextAnalysis";

const seedDatabase = async () => {
    await AppDataSource.initialize();

    const userRepository = AppDataSource.getRepository(User);
    const textRepository = AppDataSource.getRepository(Text);
    const textAnalysisRepository = AppDataSource.getRepository(TextAnalysis);

    const user = new User();
    user.name = "John Doe";
    user.email = "john.doe@example.com";
    await userRepository.save(user);

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

    console.log("Database seeded successfully");
    process.exit(0);
};

seedDatabase().catch(error => {
    console.error("Error seeding database:", error);
    process.exit(1);
});
