<script lang="ts" setup>
import { CheckIcon } from '@heroicons/vue/24/outline'

type Props = {
  id: string
  label?: string
  required?: boolean
  error?: string
}
defineProps<Props>()
const modelValue = defineModel<boolean>('modelValue', { default: false })
</script>

<template>
  <label :for="id" class="flex items-center gap-2 text-sm group">
    <input
      :id="id"
      v-model="modelValue"
      type="checkbox"
      :aria-checked="modelValue"
      class="appearance-none focus:outline-none"
    />
    <div
      class="flex items-center justify-center flex-shrink-0 w-5 h-5 border-2 rounded group-focus-within:ring-blue-500 ring-offset-1 group-focus-within:ring-2"
      aria-hidden="true"
      :class="
        modelValue
          ? 'bg-blue-500 border-blue-500 group-hover:bg-blue-600 group-hover:border-blue-600'
          : 'border-gray-100  group-hover:border-gray-200'
      "
    >
      <CheckIcon class="w-3 h-3 text-white stroke-2" />
    </div>
    {{ label }}
    <p :id="`${id}-error`" class="sr-only" aria-live="polite">
      {{ error }}
    </p>
  </label>
</template>
