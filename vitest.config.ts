import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    include: ["./test/**/*.{spec,test}.ts", "./utils/**/*.{spec,test}.ts"],
    environment: "nuxt",
  },
});
