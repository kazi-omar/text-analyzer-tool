export const MESSAGES = {
    DATABASE_CONNECTED: "Database connected successfully",
    DATABASE_CONNECTION_FAILED: "Database connection failed:",
    DATABASE_SEEDED_SUCCESSFULLY: "Database seeded successfully",
    ERROR_SEEDING_DATABASE: "Error seeding database:",
    SERVER_RUNNING: (port: number | string) => `Server is running at http://localhost:${port}`,
    USER_CREATED_SUCCESSFULLY: "User created successfully",
    REQUEST_API_ROUTE_NOT_FOUND: (path: string) => `Request API route ${path} is not found`,
    TEXT_CREATED_SUCCESSFULLY: "Text created successfully",
    TEXT_FETCHED_SUCCESSFULLY: "Text fetched successfully",
    TEXT_UPDATED_SUCCESSFULLY: "Text updated successfully",
    TEXT_DELETED_SUCCESSFULLY: "Text deleted successfully",

    TEXT_ANALYSIS_FETCHED_SUCCESSFULLY: "Text analysis fetched successfully",
    WORD_COUNT_FETCHED_SUCCESSFULLY: "Word count fetched successfully",
    CHAR_COUNT_FETCHED_SUCCESSFULLY: "Character count fetched successfully",
    SENTENCE_COUNT_FETCHED_SUCCESSFULLY: "Sentence count fetched successfully",
    PARAGRAPH_COUNT_FETCHED_SUCCESSFULLY: "Paragraph count fetched successfully",
    LONGEST_WORD_FETCHED_SUCCESSFULLY: "Longest words fetched successfully"
};

export const VALIDATIONMESSAGES = {
    NAME_AND_EMAIL_REQUIRED: "Name and email are required",
    USER_ALREADY_EXISTS: (email: string) => `User with email ${email} already exists`,
    CONTENT_REQUIRED: "Content is required",
    TEXT_NOT_FOUND: "Text not found",
    USER_ID_REQUIRED: "User ID is required",
    USER_NOT_FOUND: "User not found",
    TEXT_ANALYSIS_NOT_FOUND: "Text analysis not found"
};

export const ErrorName = {
    BAD_REQUEST: "BadRequestError",
    UNAUTHORIZED: "UnauthorizedError",
    NOT_FOUND: "NotFoundError",
    UNPROCESSABLE_ENTITY: "UnprocessableEntityError",
    INTERNAL_SERVER_ERROR: "InternalServerError",
    BAD_GATEWAY: "BadGatewayError",
    UNKNOWN_ERROR: "An unknown error occurred"
};
