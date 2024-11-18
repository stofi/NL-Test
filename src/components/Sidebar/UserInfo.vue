<script lang="ts" setup>
defineProps<{
  name: string
  email: string
}>()
</script>
<template>
  <div class="flex flex-col items-center mb-2">
    <p class="text-xl font-medium leading-loose">
      {{ name }}
    </p>
    <p class="text-sm text-neutral-500">{{ email }}</p>
  </div>
</template>
