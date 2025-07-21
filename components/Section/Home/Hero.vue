<template>
  <section class="relative min-h-[800px] w-full overflow-hidden">
    <!-- Фон -->
    <img
      src="/images/hero/uz.png"
      alt="Uzbekistan city view"
      class="absolute inset-0 z-0 size-full object-cover"
    />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40"
    ></div>

    <!-- Main Content Card -->
    <div
      class="absolute bottom-8 left-1/2 w-[95%] max-w-[1200px] -translate-x-1/2 transition-all duration-700 ease-out md:bottom-16"
    >
      <!-- Background with gradient and blur effect -->
      <div
        class="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/95 to-white/90 shadow-2xl backdrop-blur-md"
      >
        <!-- Decorative elements -->
        <div
          class="absolute -right-20 -top-20 size-40 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"
        ></div>
        <div
          class="absolute -bottom-10 -left-10 size-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl"
        ></div>

        <!-- Content -->
        <div class="relative z-10 p-6 md:p-12">
          <div class="flex flex-col gap-8 md:gap-12">
            <!-- Title Section -->
            <div class="flex flex-col gap-6 text-center md:text-left">
              <!-- Main Title -->
              <div class="space-y-4">
                <h1
                  class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
                >
                  Welcome to
                  <span
                    class="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
                  >
                    Uzbekistan!
                  </span>
                </h1>

                <!-- Subtitle with better typography -->
                <div class="relative">
                  <p
                    class="text-xl font-medium text-gray-700 md:text-3xl lg:text-4xl"
                  >
                    The 38th International Olympiad
                  </p>
                  <p
                    class="text-lg font-medium text-gray-600 md:text-2xl lg:text-3xl"
                  >
                    in Informatics
                    <span class="inline-flex items-center gap-2 text-blue-600">
                      (IOI 2026)
                      <svg
                        class="size-6 md:size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Stats/Info Cards -->
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              <!-- Date Card -->
              <div
                class="group rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-6"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded-full bg-blue-100 p-2">
                    <svg
                      class="size-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-600">Event Date</p>
                    <p class="text-lg font-bold text-blue-700">
                      August 9-16, 2026
                    </p>
                  </div>
                </div>
              </div>

              <!-- Location Card -->
              <div
                class="group rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-6"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded-full bg-green-100 p-2">
                    <svg
                      class="size-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-600">Location</p>
                    <p class="text-lg font-bold text-green-700">Tashkent</p>
                  </div>
                </div>
              </div>

              <!-- Participants Card -->
              <div
                class="group rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-6"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <svg
                      class="size-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-600">Countries</p>
                    <p class="text-lg font-bold text-purple-700">90+ Teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating decorative elements -->
    <div
      class="absolute left-10 top-20 size-2 animate-pulse rounded-full bg-white/60 md:size-3"
    ></div>
    <div
      class="absolute right-20 top-32 size-1 animate-pulse rounded-full bg-white/40 delay-1000 md:size-2"
    ></div>
    <div
      class="absolute left-1/4 top-40 size-1.5 animate-pulse rounded-full bg-white/50 delay-500 md:size-2.5"
    ></div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
