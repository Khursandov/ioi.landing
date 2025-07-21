<template>
  <div class="bg-gray-50 pt-24">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="mx-auto max-w-7xl">
        <!-- Header -->
        <div class="mb-8 text-center md:mb-12">
          <h1
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            ABOUT UZBEKISTAN
          </h1>
          <div class="mx-auto h-1 w-16 bg-red-500"></div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <!-- Left Side - Image -->
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1597058712635-36a6e4327b3f?w=800&h=600&fit=crop"
              alt="Uzbekistan Architecture"
              class="h-full w-full object-cover"
            />
            <!-- Overlay with flag colors -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20"></div>
          </div>

          <!-- Right Side - Content -->
          <div class="flex flex-col justify-center space-y-6">
            <p class="text-lg leading-relaxed text-gray-700">
              Uzbekistan, officially known as the Republic of Uzbekistan, is a landlocked country in Central Asia. It shares borders with Kazakhstan to the north, Kyrgyzstan to the northeast, Tajikistan to the southeast, Afghanistan to the south, and Turkmenistan to the southwest.
            </p>

            <p class="text-lg leading-relaxed text-gray-700">
              Uzbekistan is geographically diverse, featuring ancient cities along the Silk Road, the Kyzylkum Desert, and fertile valleys. The country boasts a rich cultural heritage with influences from ancient civilizations like the Persian, Greek, and Islamic empires, as well as Soviet-era developments.
            </p>

            <p class="text-lg leading-relaxed text-gray-700">
              Uzbek is the official language, but Russian is also widely spoken and understood throughout the country. English is increasingly common in tourist areas and among younger generations. Uzbekistan's economy relies on sectors like cotton production, mining, natural gas, and a growing tourism industry showcasing its magnificent Islamic architecture.
            </p>

            <!-- Info Cards Grid -->
            <div class="grid grid-cols-2 gap-4 pt-6">
              <!-- Capital -->
              <div class="rounded-lg bg-white p-4 shadow-md">
                <h3 class="mb-2 font-semibold text-gray-800">Capital</h3>
                <p class="text-blue-600">Tashkent</p>
              </div>

              <!-- Population -->
              <div class="rounded-lg bg-white p-4 shadow-md">
                <h3 class="mb-2 font-semibold text-gray-800">Population</h3>
                <p class="text-blue-600">34+ Million</p>
              </div>

              <!-- Currency -->
              <div class="rounded-lg bg-white p-4 shadow-md">
                <h3 class="mb-2 font-semibold text-gray-800">Currency</h3>
                <p class="text-blue-600">Uzbek Som (UZS)</p>
              </div>

              <!-- Language -->
              <div class="rounded-lg bg-white p-4 shadow-md">
                <h3 class="mb-2 font-semibold text-gray-800">Language</h3>
                <p class="text-blue-600">Uzbek, Russian</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Information Sections -->
        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Climate -->
          <div class="rounded-xl bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=100&h=100&fit=crop&crop=center"
                  alt="Climate"
                  class="h-full w-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Climate</h3>
            </div>
            <p class="text-gray-600">
              Continental climate with hot, dry summers (20°C-35°C in August) and mild winters. Minimal rainfall with clear, sunny skies perfect for exploration.
            </p>
          </div>

          <!-- Transportation -->
          <div class="rounded-xl bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544620282-4913bb06908b?w=100&h=100&fit=crop&crop=center"
                  alt="Transportation"
                  class="h-full w-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Transportation</h3>
            </div>
            <p class="text-gray-600">
              Modern metro system in Tashkent with beautifully decorated stations. Taxis, buses, and organized transport for IOI 2026 participants.
            </p>
          </div>

          <!-- Practical Info -->
          <div class="rounded-xl bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop&crop=center"
                  alt="Practical"
                  class="h-full w-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Practical Info</h3>
            </div>
            <p class="text-gray-600">
              220V power supply with Type C/F plugs. Bottled water recommended. Credit cards accepted in major establishments.
            </p>
          </div>
        </div>

        <!-- IOI 2026 Highlight -->
        <div class="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div class="text-center">
            <h2 class="mb-4 text-2xl font-bold md:text-3xl">
              Welcome to IOI 2026 in Uzbekistan!
            </h2>
            <p class="mx-auto max-w-3xl text-lg leading-relaxed opacity-90">
              Experience the perfect blend of ancient history and modern innovation as we host the 38th International Olympiad in Informatics in the heart of Central Asia. Discover the hospitality, culture, and beauty of Uzbekistan while competing with the world's brightest young minds.
            </p>
            <div class="mt-6">
              <span class="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm font-medium">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                August 9-16, 2026 • Tashkent, Uzbekistan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

// SEO Meta
useSeoMeta({
  title: "General Information - IOI 2026 Uzbekistan",
  ogTitle: "General Information - IOI 2026 Uzbekistan",
  twitterTitle: "General Information - IOI 2026 Uzbekistan",
  description:
    "Essential information for IOI 2026 participants visiting Uzbekistan: airport details, weather, currency, water quality, power plugs, language, and transportation in Tashkent.",
  ogDescription:
    "Essential information for IOI 2026 participants visiting Uzbekistan: airport details, weather, currency, water quality, power plugs, language, and transportation in Tashkent.",
  twitterDescription:
    "Essential information for IOI 2026 participants visiting Uzbekistan: airport details, weather, currency, water quality, power plugs, language, and transportation in Tashkent.",
  ogImage: "/images/hero/uz.png",
  ogImageUrl: "/images/hero/uz.png",
  twitterImage: "/images/hero/uz.png",
});
</script>
