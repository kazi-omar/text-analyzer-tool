export const MESSAGES = {
    DATABASE_CONNECTED: "Database connected successfully",
    DATABASE_CONNECTION_FAILED: "Database connection failed:",
    DATABASE_SEEDED_SUCCESSFULLY: "Database seeded successfully",
    ERROR_SEEDING_DATABASE: "Error seeding database:",
    SERVER_RUNNING: (port: number | string) => `Server is running at http://localhost:${port}`
};

export const ErrorName = {
    BAD_REQUEST: "BadRequestError",
    UNAUTHORIZED: "UnauthorizedError",
    NOT_FOUND: "NotFoundError",
    UNPROCESSABLE_ENTITY: "UnprocessableEntityError",
    INTERNAL_SERVER_ERROR: "InternalServerError",
    BAD_GATEWAY: "BadGatewayError"
};
