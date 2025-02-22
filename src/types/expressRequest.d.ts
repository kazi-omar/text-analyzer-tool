declare global {
    namespace Express {
        interface Request {
            user: {
                id: string;
                name: string;
                email: string;
            };
            session: session.Session & Partial<session.SessionData>;
        }
    }
}

export {};
