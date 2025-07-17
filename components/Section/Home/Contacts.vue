<template>
  <section class="relative bg-white px-6 py-10">
    <div
      class="relative mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row"
    >
      <!-- Форма -->
      <div
        class="relative w-full rounded-2xl bg-gradient-to-r from-[#345CFE] to-[#4A98FE] p-8 text-white md:w-2/3"
      >
        <h2 class="text-2xl font-bold">Contact us!</h2>
        <p class="text-sm opacity-80">
          The Asia-Pacific Informatics Olympiad 2025
        </p>

        <form action="#" method="POST" class="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full border-b border-white/50 bg-transparent py-2 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone number"
            class="w-full border-b border-white/50 bg-transparent py-2 text-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            class="w-full border-b border-white/50 bg-transparent py-2 text-white focus:outline-none"
          ></textarea>

          <button
            type="submit"
            class="mt-4 w-full rounded-lg bg-white py-2 font-medium text-blue-600 transition hover:bg-gray-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
