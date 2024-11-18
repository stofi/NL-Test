<script lang="ts" setup>
import { computed } from 'vue'
import StatusBadge from './StatusBadge.vue'
import OrderActions from './OrderActions.vue'
import type { Order } from '@/types'
import { PhotoIcon } from '@heroicons/vue/24/outline'
import AppCard from '@/components/AppCard.vue'
import AppButton from '@/components/AppButton.vue'
import SupportInfo from './SupportInfo.vue'

const props = defineProps<{ order: Order }>()

const formattedDate = computed(() => {
  const date = new Date(props.order.date)
  return date.toLocaleDateString('cs-CZ')
})
</script>
<template>
  <AppCard class="grid gap-3 md:grid-cols-2 place-items-start">
    <h2 class="col-start-1 text-lg font-semibold leading-normal">
      Číslo objednávky: {{ order.orderNumber }}
    </h2>
    <StatusBadge class="md:col-start-2 place-self-end" :status="order.status" />

    <div class="flex col-start-1 gap-2 mb-3">
      <div
        v-for="i in 3"
        :key="i"
        class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg"
      >
        <PhotoIcon class="w-5 h-5 text-gray-400 stroke-2" />
      </div>
    </div>
    <div class="col-start-1 mb-3 font-light">
      <p>
        Datum objednávky: <span class="text-neutral-500">{{ formattedDate }}</span>
      </p>
      <p>
        Cena celkem: <span class="text-neutral-500">{{ order.totalPrice }} Kč</span>
      </p>
    </div>
    <SupportInfo class="mb-3 place-self-end" />
    <AppButton class="w-full col-start-1" label="Detail" />
    <OrderActions class="h-full md:col-start-2 place-self-center md:place-self-end" />
  </AppCard>
</template>
