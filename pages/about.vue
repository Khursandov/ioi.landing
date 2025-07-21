<template>
  <div class="bg-gray-50 pt-24">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="mx-auto max-w-6xl">
        <!-- Page Header -->
        <div class="mb-12 text-center">
          <h1
            class="mb-4 text-4xl font-bold text-[#004D79] md:text-5xl lg:text-6xl"
          >
            About IOI
          </h1>
          <div
            class="mx-auto h-1 w-24 bg-gradient-to-r from-[#004D79] to-blue-400"
          ></div>
        </div>

        <!-- About IOI Section -->
        <section class="mb-16 rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <h2 class="mb-8 text-3xl font-bold text-[#004D79] md:text-4xl">
            About IOI
          </h2>

          <div class="space-y-6 text-lg leading-relaxed text-[#223553]">
            <p>
              The International Olympiad in Informatics is one of the several
              international science Olympiads held annually around the world.
              Exceptional high school students from various countries compete in
              the prestigious algorithmic competition to sharpen their
              informatics skills – such as problem analysis, design of
              algorithms and data structures, programming, and testing.
            </p>

            <!-- Main Objectives -->
            <div class="mt-10">
              <h3 class="mb-6 text-2xl font-semibold text-[#004D79]">
                Main Objectives
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="mr-4 mt-1 size-2 rounded-full bg-[#004D79]"></div>
                  <span>
                    To discover, encourage, bring together, challenge, and give
                    recognition to young people who are exceptionally talented
                    in the field of informatics.
                  </span>
                </li>
                <li class="flex items-start">
                  <div class="mr-4 mt-1 size-2 rounded-full bg-[#004D79]"></div>
                  <span>
                    To foster friendly international relationships among
                    computer scientists and informatics educators.
                  </span>
                </li>
                <li class="flex items-start">
                  <div class="mr-4 mt-1 size-2 rounded-full bg-[#004D79]"></div>
                  <span>
                    To bring the discipline of informatics to the attention of
                    young people.
                  </span>
                </li>
                <li class="flex items-start">
                  <div class="mr-4 mt-1 size-2 rounded-full bg-[#004D79]"></div>
                  <span>
                    To promote the organisation of informatics competitions for
                    students at schools for secondary education.
                  </span>
                </li>
                <li class="flex items-start">
                  <div class="mr-4 mt-1 size-2 rounded-full bg-[#004D79]"></div>
                  <span>
                    To encourage countries to organise a future IOI in their
                    country.
                  </span>
                </li>
              </ul>
            </div>

            <!-- Competition Format -->
            <div
              class="mt-10 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8"
            >
              <p class="text-lg">
                Each participating country selects a team of up to four
                contestants to represent their nation. The team – accompanied by
                a team leader and deputy leader – will compete in a two-day
                competition. Each contestant competes individually to maximise
                their score by solving three algorithmic problems within five
                hours on each competition day.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

// SEO Meta
useSeoMeta({
  title: "About IOI - International Olympiad in Informatics 2026 Uzbekistan",
  ogTitle: "About IOI - International Olympiad in Informatics 2026 Uzbekistan",
  twitterTitle:
    "About IOI - International Olympiad in Informatics 2026 Uzbekistan",
  description:
    "Learn about the International Olympiad in Informatics (IOI), its objectives, and the upcoming IOI 2026 competition in Tashkent, Uzbekistan. The most prestigious computer science competition for high school students.",
  ogDescription:
    "Learn about the International Olympiad in Informatics (IOI), its objectives, and the upcoming IOI 2026 competition in Tashkent, Uzbekistan. The most prestigious computer science competition for high school students.",
  twitterDescription:
    "Learn about the International Olympiad in Informatics (IOI), its objectives, and the upcoming IOI 2026 competition in Tashkent, Uzbekistan. The most prestigious computer science competition for high school students.",
  ogImage: "/images/hero/uz.png",
  ogImageUrl: "/images/hero/uz.png",
  twitterImage: "/images/hero/uz.png",
});
</script>
