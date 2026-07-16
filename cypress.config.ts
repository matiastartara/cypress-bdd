import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

export default defineConfig({
  // Must be set to true because @badeball/cypress-cucumber-preprocessor internally uses Cypress.env()
  allowCypressEnv: true,
  e2e: {
    async setupNodeEvents(on, config) {
      // Merge process.env variables into Cypress config.env
      config.env = {
        ...config.env,
        ...process.env
      };

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.ts'],
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },

});
