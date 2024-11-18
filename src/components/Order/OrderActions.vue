<script lang="ts" setup>
import { ArrowUturnLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const emits = defineEmits<{
  (e: 'repeat-order'): void
  (e: 'cancel-order'): void
}>()

const actions = [
  {
    label: 'Zopakovat',
    icon: ArrowUturnLeftIcon,
    event: 'repeat-order',
  },
  {
    label: 'Stornovat',
    icon: XMarkIcon,
    event: 'cancel-order',
  },
]

const handleClick = (event: string) => {
  if (event === 'repeat-order') {
    emits('repeat-order')
  } else if (event === 'cancel-order') {
    emits('cancel-order')
  }
}
</script>
<template>
  <div class="flex items-center gap-2">
    <button
      v-for="action in actions"
      :key="action.event"
      class="inline-flex items-center gap-1 px-1 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-blue-500"
      @click="handleClick(action.event)"
    >
      <span>{{ action.label }}</span>
      <component :is="action.icon" class="w-5 h-5 stroke-2" />
    </button>
  </div>
</template>
