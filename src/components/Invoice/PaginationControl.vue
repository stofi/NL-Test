<script lang="ts" setup>
import { computed } from 'vue'
import AppButton from '@/components/AppButton.vue'

const props = defineProps<{
  totalPages: number
}>()

const currentPage = defineModel<number>('currentPage', {
  type: Number,
  default: 1,
})

defineEmits<{
  (e: 'load-more'): void
}>()

const pageButtons = computed(() => {
  const buttons = []
  if (currentPage.value > 1) {
    buttons.push(1)
  }
  if (currentPage.value > 3) {
    buttons.push(null)
  }
  if (currentPage.value > 2) {
    buttons.push(currentPage.value - 1)
  }
  buttons.push(currentPage.value)
  if (currentPage.value < props.totalPages - 1) {
    buttons.push(currentPage.value + 1)
  }
  if (currentPage.value < props.totalPages - 2) {
    buttons.push(null)
  }
  if (currentPage.value < props.totalPages) {
    buttons.push(props.totalPages)
  }
  return buttons
})
</script>
<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:place-items-center">
    <AppButton class="md:col-start-2" label="Načíst další" @click="$emit('load-more')" />
    <div class="flex justify-center gap-2 md:ml-auto">
      <template v-for="button in pageButtons" :key="button">
        <button
          v-if="button !== null"
          class="h-8 px-1 text-center bg-white rounded-md min-w-8 focus:ring-2 focus:outline-none focus:ring-blue-500 hover:text-blue-500"
          :class="{
            'text-blue-500': button === currentPage,
          }"
          :aria-current="button === currentPage ? 'page' : undefined"
          :aria-label="`Přejít na stránku ${button}`"
          @click="currentPage = button"
        >
          <span class="sr-only">Přejít na stránku </span>
          <span
            class="text-sm font-semibold"
            :class="{ 'text-blue-500': button === currentPage }"
            >{{ button }}</span
          >
        </button>
        <span
          v-else
          class="w-8 h-8 px-1 text-center bg-white rounded-md pointer-events-none"
          aria-hidden="true"
        >
          ...
        </span>
      </template>
    </div>
  </div>
</template>
