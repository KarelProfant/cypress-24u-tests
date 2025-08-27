import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "oxj3dr",
    watchForFileChanges: false,
    baseUrl: "https://obchod.24u.cz/",
    env: {
      baseUrl: "https://obchod.24u.cz/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //CYPRESS_RECORD_KEY a6002f34-3629-44a0-ac9a-71546454227d
      //npx cypress run --record --key a6002f34-3629-44a0-ac9a-7154645422
    },
  },
});


