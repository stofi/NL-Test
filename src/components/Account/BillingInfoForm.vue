<script setup lang="ts">
import TextField from '@/components/Input/TextField.vue'
import { reactive, watch } from 'vue'
import { z } from 'zod'
import CountrySelect from '../Input/CountrySelect.vue'

const schema = z.object({
  name: z.string().min(1, 'Jméno je povinné'),
  surname: z.string().min(1, 'Příjmení je povinné'),
  company: z.string().min(1, 'Název firmy je povinný'),
  companyID: z.string().min(1, 'IČ je povinné'),
  vatID: z.string().optional().or(z.literal('')),
  street: z.string().min(1, 'Ulice a číslo popisné je povinné'),
  city: z.string().min(1, 'Město je povinné'),
  postalCode: z.string().min(1, 'PSČ je povinné'),
  country: z.string().min(1, 'Země je povinná'),
})

type BillingInfo = z.infer<typeof schema>

const state = reactive<BillingInfo>({
  name: '',
  surname: '',
  company: '',
  companyID: '',
  vatID: '',
  street: '',
  city: '',
  postalCode: '',
  country: '',
})

const errors = reactive({
  name: '',
  surname: '',
  company: '',
  companyID: '',
  vatID: '',
  street: '',
  city: '',
  postalCode: '',
  country: '',
})

const validate = () => {
  const result = schema.safeParse(state)
  if (!result.success) {
    errors.name = ''
    errors.surname = ''
    errors.company = ''
    errors.companyID = ''
    errors.vatID = ''
    errors.street = ''
    errors.city = ''
    errors.postalCode = ''
    errors.country = ''
    for (const error of result.error.errors) {
      errors[error.path[0] as keyof BillingInfo] = error.message
    }
    return false
  }
  return true
}

watch(state, validate)
</script>

<template>
  <form
    class="grid gap-3 gap-y-2.5 md:grid-cols-4 border-b border-neutral-200 pb-8"
    role="group"
    aria-labelledby="billing-info-title"
  >
    <h3 id="billing-info-title" class="mb-4 text-lg font-semibold col-span-full">
      Fakturační údaje
    </h3>
    <TextField
      id="billing-name"
      v-model="state.name"
      autocomplete="given-name"
      required
      label="Jméno"
      :error="errors.name"
      class="md:col-span-2"
    />
    <TextField
      id="billing-surname"
      v-model="state.surname"
      autocomplete="family-name"
      required
      label="Příjmení"
      :error="errors.surname"
      class="md:col-span-2"
    />
    <TextField
      id="company"
      v-model="state.company"
      autocomplete="organization"
      required
      label="Název firmy"
      :error="errors.company"
      class="md:col-span-2"
    />
    <TextField
      id="companyID"
      v-model="state.companyID"
      autocomplete="tax-id"
      required
      label="IČ"
      :error="errors.companyID"
      class="md:col-span-1"
    />
    <TextField
      id="vatID"
      v-model="state.vatID"
      autocomplete="vat-id"
      label="DIČ"
      :error="errors.vatID"
      class="md:col-span-1"
    />
    <TextField
      id="street"
      v-model="state.street"
      autocomplete="street-address"
      required
      label="Ulice a číslo popisné"
      :error="errors.street"
      class="md:col-span-2"
    />
    <TextField
      id="city"
      v-model="state.city"
      autocomplete="address-level2"
      required
      label="Město"
      :error="errors.city"
      class="md:col-span-2"
    />
    <TextField
      id="postalCode"
      v-model="state.postalCode"
      autocomplete="postal-code"
      required
      label="PSČ"
      :error="errors.postalCode"
      class="md:col-span-2"
    />
    <CountrySelect
      id="country"
      v-model="state.country"
      autocommplete="country"
      required
      label="Země"
      :error="errors.country"
      class="md:col-span-2"
    />
  </form>
</template>
