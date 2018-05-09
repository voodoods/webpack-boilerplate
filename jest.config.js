module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setupTests.js',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  transform: {".*": "<rootDir>/node_modules/jest-css-modules"},
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileTransform.js',
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}
