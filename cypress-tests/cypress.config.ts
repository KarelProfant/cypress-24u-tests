import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: "https://obchod.24u.cz/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
