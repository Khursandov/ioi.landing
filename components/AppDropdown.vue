<template>
  <div
    class="relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Trigger Button -->
    <button :class="triggerClass" @click="toggleDropdown">
      <span>{{ title }}</span>
      <svg
        v-if="showArrow"
        class="size-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" :class="menuClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  triggerClass?: string;
  menuClass?: string;
  showArrow?: boolean;
  hoverToOpen?: boolean;
  closeDelay?: number;
}

withDefaults(defineProps<Props>(), {
  triggerClass: "flex items-center space-x-1 transition-colors duration-200",
  menuClass:
    "absolute left-0 top-full w-max rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50",
  showArrow: true,
  hoverToOpen: true,
  closeDelay: 0,
});

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function openDropdown() {
  isOpen.value = true;
}

function closeDropdown() {
  isOpen.value = false;
}

function handleMouseEnter() {
  openDropdown();
}

function handleMouseLeave() {
  closeDropdown();
}

// Экспортируем функции для внешнего использования
defineExpose({
  isOpen: readonly(isOpen),
  open: openDropdown,
  toggle: toggleDropdown,
});
</script>
