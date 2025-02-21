import { UserRepository } from "@repositories/UserRepository";
import { User } from "@models/User";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string): Promise<User> {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error(`User with email ${email} already exists`);
        }

        const user = new User();
        user.name = name;
        user.email = email;

        return await this.userRepository.save(user);
    }
}
