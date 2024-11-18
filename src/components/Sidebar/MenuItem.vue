<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

defineProps<{
  title: string
  route: string
}>()
</script>
<template>
  <RouterLink
    :to="route"
    class="flex items-center gap-2 p-3 font-medium rounded-md focus:ring-2 hover:text-blue-500 focus:outline-none focus:ring-blue-500"
    active-class="text-white bg-blue-500 hover:text-white"
    :aria-current="$route.path === route ? 'page' : undefined"
  >
    <slot name="icon"> </slot>
    {{ title }}
    <ChevronRightIcon class="h-5 ml-auto stroke-2" />
  </RouterLink>
</template>
