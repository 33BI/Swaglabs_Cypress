const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quiet: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  e2e: {
    specPattern: "cypress/integration/**/*.spec.js",
    baseUrl: "https://www.saucedemo.com/",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
    }
  }
});
