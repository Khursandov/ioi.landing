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
              class="size-full object-cover"
            />
            <!-- Overlay with flag colors -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20"
            ></div>
          </div>

          <!-- Right Side - Content -->
          <div class="flex flex-col justify-center space-y-6">
            <p class="text-lg leading-relaxed text-gray-700">
              Uzbekistan, officially known as the Republic of Uzbekistan, is a
              landlocked country in Central Asia. It shares borders with
              Kazakhstan to the north, Kyrgyzstan to the northeast, Tajikistan
              to the southeast, Afghanistan to the south, and Turkmenistan to
              the southwest.
            </p>

            <p class="text-lg leading-relaxed text-gray-700">
              Uzbekistan is geographically diverse, featuring ancient cities
              along the Silk Road, the Kyzylkum Desert, and fertile valleys. The
              country boasts a rich cultural heritage with influences from
              ancient civilizations like the Persian, Greek, and Islamic
              empires, as well as Soviet-era developments.
            </p>

            <p class="text-lg leading-relaxed text-gray-700">
              Uzbek is the official language, but Russian is also widely spoken
              and understood throughout the country. English is increasingly
              common in tourist areas and among younger generations.
              Uzbekistan's economy relies on sectors like cotton production,
              mining, natural gas, and a growing tourism industry showcasing its
              magnificent Islamic architecture.
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
              <div class="size-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=100&h=100&fit=crop&crop=center"
                  alt="Climate"
                  class="size-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Climate</h3>
            </div>
            <p class="text-gray-600">
              Continental climate with hot, dry summers (20°C-35°C in August)
              and mild winters. Minimal rainfall with clear, sunny skies perfect
              for exploration.
            </p>
          </div>

          <!-- Transportation -->
          <div class="rounded-xl bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center gap-3">
              <div class="size-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544620282-4913bb06908b?w=100&h=100&fit=crop&crop=center"
                  alt="Transportation"
                  class="size-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Transportation</h3>
            </div>
            <p class="text-gray-600">
              Modern metro system in Tashkent with beautifully decorated
              stations. Taxis, buses, and organized transport for IOI 2026
              participants.
            </p>
          </div>

          <!-- Practical Info -->
          <div class="rounded-xl bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center gap-3">
              <div class="size-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop&crop=center"
                  alt="Practical"
                  class="size-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Practical Info</h3>
            </div>
            <p class="text-gray-600">
              220V power supply with Type C/F plugs. Bottled water recommended.
              Credit cards accepted in major establishments.
            </p>
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
