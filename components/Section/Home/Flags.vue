<template>
  <section class="bg-gray-100 px-6 py-10 text-center">
    <h2 class="text-4xl font-bold text-[#002C9B] md:text-3xl">
      APIO COUNTRIES OR REGIONS
    </h2>

    <div
      class="container mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4"
    >
      <!-- Страны -->
      <div
        v-for="i in flags"
        :key="i.image"
        class="flex items-center space-x-4"
      >
        <img :src="i.image" :alt="i.name" class="size-16 rounded-full" />
        <span class="text-xl text-[#2C2C2C]">{{ i.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const flags = [
  {
    name: "Armenia",
    image: "/images/flags/armenia.png",
  },
  {
    name: "Hong Kong SAR, China",
    image: "/images/flags/hong-kong.png",
  },
  {
    name: "Kazakhstan",
    image: "/images/flags/kazakhstan.png",
  },
  {
    name: "Australia",
    image: "/images/flags/Australia.png",
  },
  {
    name: "India",
    image: "/images/flags/India.png",
  },
  {
    name: "Korea",
    image: "/images/flags/Korea.png",
  },
  {
    name: "Azerbaijan",
    image: "/images/flags/Azerbaijan.png",
  },
  {
    name: "Indonesia",
    image: "/images/flags/Indonesia.png",
  },
  {
    name: "Kyrgyzstan",
    image: "/images/flags/Kyrgzstan.png",
  },
  {
    name: "Bangladesh",
    image: "/images/flags/Bangladesh.png",
  },
  {
    name: "Iran",
    image: "/images/flags/Iran.png",
  },
  {
    name: "Macao SAR, China",
    image: "/images/flags/MacaoSAR,China.png",
  },
  {
    name: "China",
    image: "/images/flags/China.png",
  },
  {
    name: "Israel",
    image: "/images/flags/Israel.png",
  },
  {
    name: "Malaysia",
    image: "/images/flags/Malaysia.png",
  },
  {
    name: "Egypt",
    image: "/images/flags/Egypt.png",
  },
  {
    name: "Japan",
    image: "/images/flags/Japan.png",
  },
  {
    name: "Mongolia",
    image: "/images/flags/Mongolia.png",
  },
  {
    name: "Georgia",
    image: "/images/flags/Georgia.png",
  },
  {
    name: "Jordan",
    image: "/images/flags/Jordan.png",
  },
  {
    name: "New Zealand",
    image: "/images/flags/NewZealand.png",
  },
  {
    name: "Pakistan",
    image: "/images/flags/Pakistan.png",
  },
  {
    name: "Phillipines",
    image: "/images/flags/Phillipines.png",
  },
  {
    name: "Russia",
    image: "/images/flags/Russia.png",
  },
  {
    name: "Palestine",
    image: "/images/flags/Palestine.png",
  },
  {
    name: "Sri Lanka",
    image: "/images/flags/SriLanka.png",
  },
  {
    name: "Saudi Arabia",
    image: "/images/flags/SaudiArabia.png",
  },
  {
    name: "Singapore",
    image: "/images/flags/Singapore.png",
  },
  {
    name: "Tajikistan",
    image: "/images/flags/Tajikstan.png",
  },
  {
    name: "Syria",
    image: "/images/flags/Syria.png",
  },
  {
    name: "Turkmenistan",
    image: "/images/flags/Turkmenistan.png",
  },
  {
    name: "Türkiye",
    image: "/images/flags/Turkiye.png",
  },
  {
    name: "Vietnam",
    image: "/images/flags/Vietnam.png",
  },
  {
    name: "Uzbekistan",
    image: "/images/flags/Uzbekistan.png",
  },
  {
    name: "Taiwan",
    image: "/images/flags/Taiwan.jpg",
  },
  {
    name: "Thailand",
    image: "/images/flags/Thailand.jpg",
  },
];
</script>
