<template>
  <header class="absolute left-0 top-0 z-30 w-full bg-transparent">
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
      <nav
        class="hidden space-x-8 text-lg font-medium md:flex"
        :class="textColorClass"
      >
        <AppDropdown
          title="IOI 2026"
          :trigger-class="dropdownTriggerClass"
          :close-delay="700"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/about"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              About IOI
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Registration
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Accommodations
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Organisers
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Sponsors
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Logo
            </NuxtLink>
          </template>
        </AppDropdown>

        <!-- Information Dropdown using AppDropdown component -->
        <AppDropdown
          title="Uzbekistan"
          :trigger-class="dropdownTriggerClass"
          :close-delay="700"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/about-uzbekistan"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              About Uzbekistan
            </NuxtLink>
            <NuxtLink
              to="/general-information"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              General Information & FAQ
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Travel and visa
            </NuxtLink>
          </template>
        </AppDropdown>

        <NuxtLink to="/coming-soon" :class="linkClass"> Schedule </NuxtLink>

        <AppDropdown
          title="Contest"
          :trigger-class="dropdownTriggerClass"
          :close-delay="700"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/contest-rules"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Contest Rules
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Call for Tasks
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Contest environment
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Scoreboard
            </NuxtLink>
          </template>
        </AppDropdown>

        <AppDropdown
          title="Gallery"
          :trigger-class="dropdownTriggerClass"
          :close-delay="700"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              Uzbekistan
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              @click="close"
            >
              IOI 2026
            </NuxtLink>
          </template>
        </AppDropdown>
      </nav>

      <!-- Мобильное меню (бургер) -->
      <div class="md:hidden">
        <button :class="mobileButtonClass" @click="toggleMobileMenu">
          <svg
            class="size-6"
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
    <div v-if="isMobileMenuOpen" :class="mobileMenuClass">
      <nav class="flex flex-col space-y-4 px-6 py-4" :class="textColorClass">
        <!-- IOI 2026 Mobile Dropdown -->
        <AppDropdown
          title="IOI 2026"
          :trigger-class="mobileDropdownTriggerClass"
          :menu-class="'mt-2 ml-4 space-y-2'"
          :hover-to-open="false"
          :close-delay="0"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/about"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              About IOI
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              IOI 2026
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Organisers
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Sponsors
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Logo
            </NuxtLink>
          </template>
        </AppDropdown>

        <!-- Uzbekistan Mobile Dropdown -->
        <AppDropdown
          title="Uzbekistan"
          :trigger-class="mobileDropdownTriggerClass"
          :menu-class="'mt-2 ml-4 space-y-2'"
          :hover-to-open="false"
          :close-delay="0"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/about-uzbekistan"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              About Uzbekistan
            </NuxtLink>
            <NuxtLink
              to="/general-information"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              General Information
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Registration
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Travel and visa
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Accommodations
            </NuxtLink>
          </template>
        </AppDropdown>

        <NuxtLink
          to="/coming-soon"
          :class="mobileLinkClass"
          @click="closeMobileMenu"
        >
          Schedule
        </NuxtLink>

        <!-- Contest Mobile Dropdown -->
        <AppDropdown
          title="Contest"
          :trigger-class="mobileDropdownTriggerClass"
          :menu-class="'mt-2 ml-4 space-y-2'"
          :hover-to-open="false"
          :close-delay="0"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Contest Rules
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Call for Tasks
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Contest environment
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Scoreboard
            </NuxtLink>
          </template>
        </AppDropdown>

        <!-- Gallery Mobile Dropdown -->
        <AppDropdown
          title="Gallery"
          :trigger-class="mobileDropdownTriggerClass"
          :menu-class="'mt-2 ml-4 space-y-2'"
          :hover-to-open="false"
          :close-delay="0"
        >
          <template #default="{ close }">
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              Uzbekistan
            </NuxtLink>
            <NuxtLink
              to="/coming-soon"
              :class="mobileLinkClass"
              @click="
                () => {
                  close();
                  closeMobileMenu();
                }
              "
            >
              IOI 2026
            </NuxtLink>
          </template>
        </AppDropdown>

        <NuxtLink to="#" :class="mobileLinkClass" @click="closeMobileMenu">
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute();
const isMobileMenuOpen = ref(false);

// Computed свойства для динамических классов
const isHomePage = computed(() => route.path === "/");

const textColorClass = computed(() =>
  isHomePage.value ? "text-white" : "text-gray-900",
);

const linkClass = computed(() =>
  isHomePage.value
    ? "transition-colors duration-200 hover:text-yellow-300"
    : "transition-colors duration-200 hover:text-blue-600",
);

const dropdownTriggerClass = computed(() =>
  isHomePage.value
    ? "flex items-center space-x-1 transition-colors duration-200 hover:text-yellow-300"
    : "flex items-center space-x-1 transition-colors duration-200 hover:text-blue-600",
);

const mobileButtonClass = computed(() =>
  isHomePage.value
    ? "text-white focus:outline-none"
    : "text-gray-900 focus:outline-none",
);

const mobileMenuClass = computed(() =>
  isHomePage.value
    ? "bg-black/90 backdrop-blur-sm md:hidden"
    : "bg-white/95 backdrop-blur-sm md:hidden border-t border-gray-200",
);

const mobileLinkClass = computed(() =>
  isHomePage.value
    ? "block transition-colors duration-200 hover:text-yellow-300"
    : "block transition-colors duration-200 hover:text-blue-600",
);

const mobileDropdownTriggerClass = computed(() =>
  isHomePage.value
    ? "flex w-full items-center justify-between transition-colors duration-200 hover:text-yellow-300"
    : "flex w-full items-center justify-between transition-colors duration-200 hover:text-blue-600",
);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}
</script>
