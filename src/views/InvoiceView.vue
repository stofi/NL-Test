<script lang="ts" setup>
import InvoiceTable from '@/components/Invoice/InvoiceTable.vue'
import PaginationControl from '@/components/Invoice/PaginationControl.vue'
</script>

<template>
  <InvoiceTable class="mb-8" />
  <PaginationControl :total-pages="56" />
</template>
