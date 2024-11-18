<script setup lang="ts">
import AppSidebar from '@/components/Sidebar/AppSidebar.vue'
</script>

<template>
  <div class="p-4 sm:px-8 md:py-6 lg:px-16">
    <header id="page-title" class="mb-6 text-3xl font-semibold leading-loose tracking-wide">
      {{ $route.meta.title }}
    </header>
    <div class="flex flex-col gap-8 md:flex-row place-items-start">
      <nav
        aria-label="Hlavní navigace"
        class="w-full col-span-full md:col-span-5 lg:col-span-3 md:max-w-80"
      >
        <AppSidebar />
      </nav>
      <main class="w-full place-self-stretch" aria-labelledby="page-title">
        <slot />
      </main>
    </div>
  </div>
</template>
