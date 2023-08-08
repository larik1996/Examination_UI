const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})