module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleNameMapper: {
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^@middleware/(.*)$': '<rootDir>/src/middleware/$1',
        '^@repositories/(.*)$': '<rootDir>/src/repositories/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    },
};
