declare module "nuxt/schema" {
  interface RuntimeConfig {}
  interface PublicRuntimeConfig {
    apiUrl: string;
    appGooglePlayUrl: string;
    appAppStoreUrl: string;
    authOneIdUrl: string;
    mapApiKey: string;
  }
}

declare module "#app" {
  interface NuxtApp {}
}

export {};
