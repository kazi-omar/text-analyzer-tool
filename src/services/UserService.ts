import { UserRepository } from "@repositories/UserRepository";
import { User } from "@models/User";
import BadRequestError from "@errors/http400Error";
import { VALIDATIONMESSAGES } from "@utils/constants";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) {
            throw new BadRequestError(VALIDATIONMESSAGES.NAME_AND_EMAIL_REQUIRED);
        }

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new BadRequestError(VALIDATIONMESSAGES.USER_ALREADY_EXISTS(email));
        }

        const user = new User();
        user.name = name;
        user.email = email;

        return await this.userRepository.save(user);
    }
}
