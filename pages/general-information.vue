<template>
  <div class="bg-gray-50 pt-24">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="mx-auto max-w-4xl">
        <!-- Header -->
        <div class="mb-8 md:mb-12">
          <h1
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            General Information
          </h1>
        </div>

        <!-- Content Sections -->
        <div class="space-y-8 md:space-y-12">
          <!-- Airport Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Airport
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              Tashkent International Airport (TAS) is the main international airport of Uzbekistan and is located approximately 12 kilometers south of Tashkent city center. It is the largest and busiest airport in Central Asia, serving as the main hub for Uzbekistan Airways. The airport handles over 3 million passengers annually and offers direct flights to many international destinations across Asia, Europe, and beyond.
            </p>
          </section>

          <!-- Weather Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Weather
            </h2>
            <div
              class="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg"
            >
              <p>
                Uzbekistan has a continental climate with hot, dry summers and mild winters. August in Tashkent is typically warm with average temperatures ranging from 20°C to 35°C (68°F to 95°F). Days are usually sunny and dry with low humidity, making it comfortable for outdoor activities.
              </p>
              <p>
                The country experiences minimal rainfall during summer months, with clear skies and plenty of sunshine. Evenings are pleasant and cooler, perfect for exploring the city. We recommend bringing light, breathable clothing and sun protection during your stay.
              </p>
            </div>
          </section>

          <!-- Currency Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Currency
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              Uzbekistan's official currency is the Uzbek Som (UZS). Foreign currency exchange services are available at Tashkent International Airport upon arrival, as well as at banks and exchange bureaus throughout the city. Major credit and debit cards (Visa, MasterCard) are widely accepted at hotels, restaurants, and shopping centers in Tashkent.
            </p>
          </section>

          <!-- Water Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Water
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              While tap water in Tashkent is generally treated, we recommend drinking bottled water during your stay for optimal health and comfort. Bottled water is readily available throughout the city at hotels, restaurants, and convenience stores. Most hotels and venues will provide complimentary bottled water for guests and participants.
            </p>
          </section>

          <!-- Power Plugs Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Power Plugs
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              Uzbekistan uses plug types C and F. Plug type C has two round pins, while plug type F has two round pins with two earth clips on the sides (Schuko plug). The country operates on a 220V supply voltage and 50Hz frequency. If your devices use different plug types or voltage, you may need to bring appropriate adapters and voltage converters.
            </p>
          </section>

          <!-- Language Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Language
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              The official language of Uzbekistan is Uzbek, written in the Latin alphabet. Russian is also widely spoken and understood, especially in Tashkent. English is commonly spoken in hotels, restaurants, and tourist areas. All IOI 2026 activities will be conducted in English with professional translation services available when needed.
            </p>
          </section>

          <!-- Local Transportation Section -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Local Transportation
            </h2>
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              Tashkent has a well-developed public transportation system including metro, buses, and taxis. The Tashkent Metro is modern, efficient, and beautifully decorated - each station is a work of art. Taxi services and ride-sharing apps are readily available. Organized transportation will be provided between hotels, competition venues, and official IOI 2026 events.
            </p>
          </section>
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
