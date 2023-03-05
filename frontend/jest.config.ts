import type { Config } from '@jest/types';
import { defaults } from 'jest-config';
// Sync object
const config: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', 'utils'],
    setupFilesAfterEnv: ['<rootDir>/testSetup.ts'],
    moduleNameMapper: {
        '\\.(css|scss|pcss)$': '<rootDir>/__mocks__/CSSStub.js',
        '\\.(jpg|jpeg|svg|png)$': '<rootDir>/__mocks__/assetStub.js',
    },
};
export default config;
