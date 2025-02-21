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
    TEXT_DELETED_SUCCESSFULLY: "Text deleted successfully"
};

export const VALIDATIONMESSAGES = {
    NAME_AND_EMAIL_REQUIRED: "Name and email are required",
    USER_ALREADY_EXISTS: (email: string) => `User with email ${email} already exists`,
    CONTENT_REQUIRED: "Content is required",
    TEXT_NOT_FOUND: "Text not found",
    USER_ID_REQUIRED: "User ID is required",
    USER_NOT_FOUND: "User not found",
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
