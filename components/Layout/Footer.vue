<template>
  <footer class="bg-[#065989] px-6 py-14 text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-12">
        <!-- IOI 2026 -->
        <div>
          <h3 class="mb-3 text-lg font-bold">IOI 2026</h3>
          <ul class="space-y-2 text-base font-normal text-white/80">
            <li><a href="#">IOI 2026 Uzbekistan</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Registration</a></li>
            <li><a href="#">Logo</a></li>
          </ul>
        </div>
        <!-- Uzbekistan -->
        <div>
          <h3 class="mb-3 text-lg font-bold">Uzbekistan</h3>
          <ul class="space-y-2 text-base font-normal text-white/80">
            <li><a href="#">About Uzbekistan</a></li>
            <li><a href="#">General Information</a></li>
            <li><a href="#">Travel and Visa</a></li>
            <li><a href="#">Accommodations</a></li>
          </ul>
        </div>
        <!-- Contest -->
        <div>
          <h3 class="mb-3 text-lg font-bold">Contest</h3>
          <ul class="space-y-2 text-base font-normal text-white/80">
            <li><NuxtLink to="/rules">Contest Rules</NuxtLink></li>
            <li><NuxtLink to="/call-for-tasks">Call for Tasks</NuxtLink></li>
            <li><a href="#">Contest Environment</a></li>
            <li><a href="#">Live Scoreboard</a></li>
            <li><a href="#">Tasks</a></li>
            <li><NuxtLink to="/ranking">Results</NuxtLink></li>
          </ul>
        </div>
        <!-- Gallery -->
        <div>
          <h3 class="mb-3 text-lg font-bold">Gallery</h3>
          <ul class="space-y-2 text-base font-normal text-white/80">
            <li><a href="#">Photos</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h3 class="mb-3 text-lg font-bold">Contact</h3>
          <ul class="space-y-2 text-base font-normal text-white/80">
            <li><a href="#">info@apio.uz</a></li>
            <li><a href="#">+998 71 203-03-43</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// пусто, логика не требуется
</script>
