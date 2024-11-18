<script lang="ts" setup>
defineProps<{
  noPadding?: boolean
}>()
</script>

<template>
  <div class="bg-white rounded-xl" :class="{ 'p-6': !noPadding }">
    <slot />
  </div>
</template>
