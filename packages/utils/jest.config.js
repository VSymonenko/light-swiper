module.exports = {
  verbose: true,
  collectCoverage: true,
  testMatch: [
    '**/tests/unit/**/*.spec.ts|**/__tests__/*.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1', '../*'],
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
