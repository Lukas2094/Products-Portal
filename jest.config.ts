import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transformar arquivos TS/TSX com ts-jest
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default config;
