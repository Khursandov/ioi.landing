<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout />
    <Toaster position="top-center" />
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/98672866"
          style="position: absolute; left: -9999px"
          alt=""
        />
      </div>
    </noscript>
  </div>
</template>

<script lang="ts" setup>
import { Toaster } from "vue-sonner";
</script>
