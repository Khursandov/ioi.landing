<template>
  <header class="absolute top-0 left-0 w-full z-30 bg-transparent">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <!-- Логотип -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            src="/images/header/logo.png"
            alt="Uzbekistan"
            class="h-20 w-auto"
          />
        </NuxtLink>
      </div>

      <!-- Навигация для десктопа -->
      <nav class="hidden space-x-8 text-lg font-medium text-white md:flex">
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          IOI 2026
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Uzbekistan
        </NuxtLink>
        <NuxtLink
          to="/schedule"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Schedule
        </NuxtLink>
        <NuxtLink
          to="/rules"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Contest
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          News
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Gallery
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Мобильное меню (бургер) -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-black/90 backdrop-blur-sm">
      <nav class="flex flex-col space-y-4 px-6 py-4 text-white">
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          IOI 2026
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          Uzbekistan
        </NuxtLink>
        <NuxtLink
          to="/schedule"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          Schedule
        </NuxtLink>
        <NuxtLink
          to="/rules"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          Contest
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          News
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          Gallery
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-yellow-300 transition-colors duration-200"
          @click="closeMobileMenu"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}
</script>
