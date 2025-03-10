import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com",
    // Enable this in CI only.
    // reporter: 'cypress-mochawesome-reporter',
    specPattern: "cypress/**/e2e/*.spec.ts",
    viewportWidth: 1280,
  },
});
