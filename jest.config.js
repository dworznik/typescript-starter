module.exports = {
  automock: false,
  setupFiles: [
    './jest.setup.js'
  ],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended']
};

