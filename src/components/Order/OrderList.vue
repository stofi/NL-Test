<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import OrderCard from './OrderCard.vue'
import type { Order } from '@/types'

const orders = ref<Order[]>([])

const generateRandomOrder = (): Order => ({
  orderNumber: Math.floor(Math.random() * 10e10),
  date: new Date().toISOString(),
  totalPrice: Math.floor(Math.random() * 1000),
  status: Math.random() > 0.5 ? 'paid' : 'unpaid',
})

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    orders.value.push(generateRandomOrder())
  }
})
</script>
<template>
  <div class="flex flex-col gap-8">
    <OrderCard v-for="order in orders" :key="order.orderNumber" :order="order" />
  </div>
</template>
