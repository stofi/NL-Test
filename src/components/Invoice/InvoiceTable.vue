<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import DownloadButton from './DownloadButton.vue'
import AppCard from '@/components/AppCard.vue'
import type { Invoice } from '@/types'

type Column = {
  key: string
  label: string
  class: string
}

const columns: Column[] = [
  {
    key: 'invoiceNumber',
    label: 'Číslo faktury',
    class: 'text-left min-w-32',
  },
  {
    key: 'orderNumber',
    label: 'Číslo objednávky',
    class: 'text-left min-w-40',
  },
  {
    key: 'totalPrice',
    label: 'Cena celkem',
    class: 'text-left min-w-32',
  },
  {
    key: 'download',
    label: 'Stažení',
    class: 'text-right',
  },
]

const invoices = ref<Invoice[]>([])

const generateRandomInvoice = (): Invoice => ({
  invoiceNumber: Math.floor(Math.random() * 10e13),
  orderNumber: Math.floor(Math.random() * 10e9),
  totalPrice: Math.floor(Math.random() * 10e3),
})

onMounted(() => {
  for (let i = 0; i < 10; i++) {
    invoices.value.push(generateRandomInvoice())
  }
})
</script>
<template>
  <AppCard no-padding class="flex flex-col max-w-full gap-3 overflow-x-scroll">
    <table>
      <thead class="border-b border-b-gray-200">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="p-4 text-sm text-gray-700"
            :class="column.class"
            scope="col"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.invoiceNumber">
          <td class="p-4">{{ invoice.invoiceNumber }}</td>
          <td class="p-4">{{ invoice.orderNumber }}</td>
          <td class="p-4">-{{ invoice.totalPrice }} Kč</td>
          <td class="p-4 text-right">
            <DownloadButton />
          </td>
        </tr>
      </tbody>
    </table>
  </AppCard>
</template>
