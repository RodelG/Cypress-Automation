const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "defaultCommandTimeout": 20000,
  "pageLoadTimeout": 20000,
  "waitAfterEachCommand":  10000,
  "responseTimeout": 4000,
  "requestTimeout": 4000,
  "trashAssetsBeforeRuns": true,


  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "Automation",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
  "video": true,
  "screenshotsFolder": "screenshots",
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.{feature,features,spec.js}',
    excludeSpecPattern: [
      '**/1-getting-started/*.js',
      '**/2-advanced-examples/*.js',
    ],
  },
})
