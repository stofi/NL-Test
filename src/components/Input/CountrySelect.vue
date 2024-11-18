<script setup lang="ts">
import { InformationCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

type Props = {
  id: string
  label?: string
  required?: boolean
  error?: string
  smallLabel?: boolean
  autocomplete?: string
}

const props = defineProps<Props>()

const modelValue = defineModel<string>('modelValue')

const moveLabel = computed(() => props.smallLabel || modelValue.value !== '')

const options = [
  {
    label: 'Česká republika',
    value: 'CZ',
  },
  {
    label: 'Slovensko',
    value: 'SK',
  },
]

const flagImageSrc = computed(() => {
  if (modelValue.value === 'CZ') {
    return '/flags/cz.svg'
  }
  if (modelValue.value === 'SK') {
    return '/flags/sk.svg'
  }
  return ''
})
</script>

<template>
  <div class="relative mt-1 group">
    <label
      :for="id"
      class="absolute block font-medium text-gray-700 transition-transform origin-top-left translate-x-4"
      :class="[moveLabel ? 'translate-y-1.5 scale-75' : 'scale-100 translate-y-4']"
    >
      {{ label }}
      <span v-if="required" aria-hidden="true" class="text-red-500">*</span>
    </label>
    <select
      :id="id"
      v-model="modelValue"
      :autocomplete="autocomplete"
      class="block w-full h-full px-4 pt-5 pb-2 leading-relaxed bg-white border rounded-md appearance-none focus:outline-none focus:border-blue-500"
      :class="[error ? 'border-red-500' : 'border-gray-200']"
      :aria-invalid="!!error"
      :required="required"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div
      class="absolute flex gap-2 -translate-y-1/2 pointer-events-none right-3 top-1/2"
      aria-hidden="true"
    >
      <div v-if="flagImageSrc" class="w-6 h-6 overflow-hidden bg-gray-200 rounded-full">
        <img :src="flagImageSrc" class="object-cover w-6 h-6" />
      </div>

      <ChevronDownIcon class="w-6 h-6 text-gray-800 group-focus-within:text-blue-500" />
      <InformationCircleIcon v-if="error" class="w-6 h-6 text-red-500" />
    </div>
    <p v-if="error" :id="`${id}-error`" class="sr-only" aria-live="polite">
      {{ error }}
    </p>
  </div>
</template>
