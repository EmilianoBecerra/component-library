import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  viteFinal: async (config) => {
    config.base = '/component-library/';
    config.resolve = {
      ...config.resolve,
      alias: {
        ...((config.resolve?.alias as Record<string, string>) || {}),
        "@": path.resolve(__dirname, "../src"),
      },
      conditions: [...(config.resolve?.conditions || []), "style"],
    };
    return config;
  },
  "framework": "@storybook/react-vite"
};
export default config;
