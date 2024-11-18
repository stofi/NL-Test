<script lang="ts" setup>
import { computed } from 'vue'
import type { OrderStatus } from '@/types'

const props = defineProps<{
  status: OrderStatus
}>()

const statusClass = computed(() => {
  return {
    'bg-green-100 text-green-700': props.status === 'paid',
    'bg-red-100 text-red-500': props.status === 'unpaid',
  }
})

const statusText = computed(() => {
  return props.status === 'paid' ? 'Zaplaceno' : 'Nezaplaceno'
})
</script>
<template>
  <span
    class="px-2 py-1 text-xs leading-relaxed rounded"
    :class="statusClass"
    aria-label="Stav objednávky"
  >
    {{ statusText }}
  </span>
</template>
