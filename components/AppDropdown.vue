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
      <slot :close="closeImmediately" />
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

const props = withDefaults(defineProps<Props>(), {
  triggerClass: "flex items-center space-x-1 transition-colors duration-200",
  menuClass:
    "absolute left-0 top-full mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50",
  showArrow: true,
  hoverToOpen: true,
  closeDelay: 700,
});

const isOpen = ref(false);
let closeTimer: NodeJS.Timeout | null = null;

function toggleDropdown() {
  isOpen.value = !isOpen.value;
  // Очищаем таймер при ручном переключении
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function openDropdown() {
  // Очищаем таймер закрытия если он существует
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
  isOpen.value = true;
}

function closeDropdown() {
  if (props.closeDelay > 0) {
    // Устанавливаем задержку перед закрытием
    closeTimer = setTimeout(() => {
      isOpen.value = false;
      closeTimer = null;
    }, props.closeDelay);
  } else {
    isOpen.value = false;
  }
}

function closeImmediately() {
  // Для немедленного закрытия при клике на ссылку
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
  isOpen.value = false;
}

function handleMouseEnter() {
  if (props.hoverToOpen) {
    openDropdown();
  }
}

function handleMouseLeave() {
  if (props.hoverToOpen) {
    closeDropdown();
  }
}

// Очищаем таймер при размонтировании компонента
onUnmounted(() => {
  if (closeTimer) {
    clearTimeout(closeTimer);
  }
});

// Экспортируем функции для внешнего использования
defineExpose({
  isOpen: readonly(isOpen),
  open: openDropdown,
  close: closeImmediately,
  toggle: toggleDropdown,
});
</script> 