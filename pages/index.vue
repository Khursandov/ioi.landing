<template>
  <div>
    <SectionHomeHero />

    <SectionHomeIoi2026 />

    <SectionHomeHosts />

    <!--    <SectionHomeContacts />-->
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useSeoMeta({
  title: t("IOI 2026"),
  ogTitle: t("meta.main.title"),
  twitterTitle: t("meta.main.title"),
  description: t("IOI 2026"),
  ogDescription: t("meta.main.description"),
  twitterDescription: t("meta.main.description"),
  ogImage: "/image-files/big-content.png",
  ogImageUrl: "/image-files/big-content.png",
  twitterImage: "/image-files/big-content.png",
});
</script>
