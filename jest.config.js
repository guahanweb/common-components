module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!(testing-library__dom)/)"],
};
