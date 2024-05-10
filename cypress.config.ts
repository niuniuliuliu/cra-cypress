import { defineConfig } from "cypress";
import { merge } from "webpack-merge";
import { devServer } from "@cypress/webpack-dev-server";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

import config from './cypress/webpackConfig';
import { WebpackConfiguration } from "webpack-dev-server";

export default defineConfig({
  // video: true,
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        webpackConfig: merge(config, {
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: devServerConfig.cypressConfig,
                  },
                ],
              },
            ],
          },
        }) as WebpackConfiguration,
      });
    },
    async setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      // auto open dev tools
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && !browser.isHeadless) {
          launchOptions.args.push("--auto-open-devtools-for-tabs");
        }
        return launchOptions;
      });
      return config;
    },
    specPattern: ["src/**/*.test.tsx", "cypress/**/*.feature"],
  },

  e2e: {
    specPattern: ["src/**/*.e2e.tsx"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
