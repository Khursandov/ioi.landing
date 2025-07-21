<template>
  <div>
    <LayoutHeader v-if="getError.statusCode !== 500" />
    <div
      class="container mt-6 flex flex-col items-center justify-center rounded-lg bg-white px-6 py-24 md:mt-10 md:px-8"
      :class="{ '!mt-0 h-screen': getError.statusCode === 500 }"
    >
      <div
        v-if="getError.statusCode === 404"
        class="flex flex-col items-center justify-center text-center"
      >
        <!-- IOI Logo for 404 page -->
        <img
          src="/images/hosts/ioi.png"
          alt="IOI Logo"
          class="mb-8 h-32 w-auto opacity-70 md:h-40"
        />

        <!-- Main message -->
        <h1 class="mb-6 text-4xl font-bold text-[#004D79] md:text-6xl">
          To be announced soon...
        </h1>

        <!-- Subtitle -->
        <p class="mb-8 max-w-lg text-lg text-[#223553] md:text-xl">
          This section is currently under development. Please check back later
          for updates about IOI 2026 Uzbekistan.
        </p>

        <!-- Decorative elements -->
        <div class="mb-8 flex space-x-2">
          <div class="h-2 w-2 animate-pulse rounded-full bg-[#004D79]"></div>
          <div
            class="h-2 w-2 animate-pulse rounded-full bg-[#004D79]"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="h-2 w-2 animate-pulse rounded-full bg-[#004D79]"
            style="animation-delay: 0.4s"
          ></div>
        </div>

        <!-- Back to home button -->
        <NuxtLink
          to="/"
          class="rounded-lg bg-[#004D79] px-8 py-3 text-white transition-colors duration-200 hover:bg-[#003d61]"
        >
          Back to Home
        </NuxtLink>
      </div>

      <!-- Original error handling for 500 errors -->
      <div v-else class="flex flex-col items-center justify-center">
        <img
          :src="getError.image"
          class="w-full max-w-[320px] object-contain md:max-w-[450px]"
          alt="error"
        />
        <div class="flex flex-col items-center justify-center gap-10">
          <h1
            class="leading-170 mt-7 text-center text-base font-semibold text-slate-900 md:text-3xl"
          >
            {{ getError.title }}
          </h1>

          <NuxtLink
            to="/"
            class="rounded-lg bg-[#004D79] px-8 py-3 text-white transition-colors duration-200 hover:bg-[#003d61]"
          >
            {{ getError.buttonText }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!--    <LayoutFooter v-if="error.statusCode != 500" />-->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { NuxtError } from "#app";

interface IProps extends NuxtError {
  statusCode: 404 | 500;
}

const props = defineProps<{
  error: IProps;
}>();

const localePath = useLocalePath();
const { t: $t } = useI18n();

const errors = {
  "500": {
    statusCode: 500,
    image: "/error/500.svg",
    buttonText: $t("reload_page"),
    title: $t("server_error"),
    link: localePath("/"),
  },
  "404": {
    statusCode: 404,
    image: "/error/404.svg",
    title: "To be announced soon...",
    link: localePath("/"),
    buttonText: "Back to Home",
  },
};

const handleError = () => clearError({ redirect: "/" });

const getError = computed(() => {
  console.log(props.error);
  const statusCode = props.error.statusCode;
  return errors[statusCode];
});
</script>
