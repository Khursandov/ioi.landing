<template>
  <div class="bg-gray-50 pt-24">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-8">
          <div
            class="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-blue-100"
          >
            <svg
              class="size-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Coming Soon
          </h1>

          <p class="text-lg text-gray-600">
            This page is under development and will be available soon.
          </p>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-sm">
          <h2 class="mb-4 text-xl font-semibold text-gray-900">Stay Tuned!</h2>

          <p class="mb-6 text-gray-700">
            We're working hard to bring you the best content for IOI 2026.
            Please check back later for updates.
          </p>

          <NuxtLink
            to="/"
            class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            <svg
              class="mr-2 size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta
useSeoMeta({
  title: "Coming Soon - IOI 2026 Uzbekistan",
  description: "This page is under development for IOI 2026",
});
</script>
