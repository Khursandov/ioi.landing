<template>
  <div>
    <LayoutHeader v-if="getError.statusCode !== 500" />
    <div
      class="container mt-6 flex flex-col items-center justify-center rounded-lg bg-white px-6 py-24 md:mt-10 md:px-8"
      :class="{ '!mt-0 h-screen': getError.statusCode === 500 }"
    >
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

        <!--        <UIButton size="sm" @click="handleError">-->
        <!--          {{ getError.buttonText }}-->
        <!--        </UIButton>-->
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
    title: $t("error_page_not_found"),
    link: localePath("/"),
    buttonText: $t("go_main"),
  },
};

const handleError = () => clearError({ redirect: "/" });

const getError = computed(() => {
  console.log(props.error);
  const statusCode = props.error.statusCode;
  return errors[statusCode];
});
</script>
