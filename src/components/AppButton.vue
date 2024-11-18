<script setup lang="ts">
type ButtonVariant = 'full' | 'outline'
type ButtonColor = 'primary' | 'danger'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    color?: ButtonColor
    label: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'full',
    color: 'primary',
    type: 'button',
  },
)
</script>

<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[
      'p-3 px-6 font-semibold text-center rounded-md focus:outline-none focus:ring-2 md:w-auto min-w-40',
      props.variant === 'outline'
        ? {
            'text-red-600 border border-red-600 hover:bg-red-600/10 focus:ring-red-600':
              props.color === 'danger',
            'border border-blue-500 hover:bg-blue-500/10 hover:text-blue-500 focus:ring-blue-500':
              props.color === 'primary',
          }
        : {
            'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500':
              props.color === 'primary',
            'bg-red-600/10 text-red-600 hover:bg-red-600/20 focus:ring-red-600':
              props.color === 'danger',
          },
    ]"
  >
    {{ label }}
  </button>
</template>
