// eslint/config.mjs
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import prettierPlug from "eslint-plugin-prettier/recommended";
import tailwindPlug from "eslint-plugin-tailwindcss";

export default createConfigForNuxt({
  files: [
    "./assets/**/*.css",
    "./composables/**/*.{ts,tsx}",
    "./components/**/*.{vue,ts,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./stores/**/*.ts",
    "./server/**/*.ts",
    "./nuxt.config.ts",
    "./eslint.config.{mjs,js,cjs}",
    "./app.vue",
    "./error.vue",
    "./tailwind.config.{ts,js}",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    eqeqeq: "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "error",
    curly: "error",
    "no-trailing-spaces": "error",
    "no-unreachable": "error",
    "vue/no-unused-components": "warn",
    "vue/html-indent": ["error", 2],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
})
  .prepend(
    prettierPlug,
    simpleImportSort.configs,
    tailwindPlug.configs["flat/recommended"],
  )
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
    },
  })
  .overrideRules({
    "prettier/prettier": "error",
    "simple-import-sort": "error",
  });
