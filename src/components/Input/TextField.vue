<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

type Props = {
  id: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  smallLabel?: boolean
  autocomplete?: string
}

const props = defineProps<Props>()

const modelValue = defineModel<string>('modelValue')

const moveLabel = computed(() => props.smallLabel || modelValue.value !== '')
</script>

<template>
  <div class="relative mt-1 group">
    <label
      :for="id"
      class="absolute block font-medium transition-transform origin-top-left translate-x-4"
      :class="[
        moveLabel
          ? 'translate-y-1.5 scale-75'
          : 'scale-100 translate-y-4 group-focus-within:translate-y-1.5 group-focus-within:scale-75',
      ]"
    >
      {{ label }}<span v-if="required" aria-hidden="true" class="text-red-500">*</span>
    </label>
    <input
      :id="id"
      v-model="modelValue"
      :autocomplete="autocomplete"
      :type="type"
      :placeholder="placeholder"
      class="block w-full px-4 pt-5 pb-2 border rounded-md focus:outline-none focus:border-blue-500"
      :class="[error ? 'border-red-500' : 'border-gray-200']"
      :required="required"
      :aria-invalid="!!error"
    />
    <div
      v-if="error"
      aria-hidden="true"
      class="absolute text-red-500 -translate-y-1/2 right-3 top-1/2"
      :title="error"
    >
      <InformationCircleIcon class="w-6 h-6" />
    </div>
    <p :id="`${id}-error`" class="sr-only" aria-live="polite">
      {{ error }}
    </p>
  </div>
</template>
