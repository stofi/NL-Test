<script setup lang="ts">
import TextField from '@/components/Input/TextField.vue'
import { reactive, watch } from 'vue'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Jméno je povinné'),
  surname: z.string().min(1, 'Příjmení je povinné'),
  email: z.string().email('Neplatný e-mail'),
  phone: z
    .string()
    .regex(/^\d{9}$/, 'Telefonní číslo musí mít 9 číslic')
    .optional()
    .or(z.literal('')),
})

type ContactInfo = z.infer<typeof schema>

const state = reactive<ContactInfo>({
  name: '',
  surname: '',
  email: '',
  phone: '',
})

const errors = reactive({
  name: '',
  surname: '',
  email: '',
  phone: '',
})

const validate = () => {
  const result = schema.safeParse(state)
  if (!result.success) {
    errors.name = ''
    errors.surname = ''
    errors.email = ''
    errors.phone = ''
    for (const error of result.error.errors) {
      errors[error.path[0] as keyof ContactInfo] = error.message
    }
    return false
  }
  return true
}

watch(state, validate)
</script>

<template>
  <form
    class="grid gap-3 gap-y-2.5 md:grid-cols-2 border-b border-neutral-200 pb-8"
    role="group"
    aria-labelledby="contact-info-title"
  >
    <h3 id="contact-info-title" class="mb-4 text-lg font-semibold col-span-full">
      Kontaktní údaje
    </h3>
    <TextField
      id="name"
      v-model="state.name"
      autocomplete="given-name"
      required
      label="Jméno"
      :error="errors.name"
    />
    <TextField
      id="surname"
      v-model="state.surname"
      autocomplete="family-name"
      required
      label="Příjmení"
      :error="errors.surname"
    />
    <TextField
      id="phone"
      v-model="state.phone"
      autocomplete="tel"
      label="Telefon"
      placeholder="+420"
      :error="errors.phone"
      small-label
    />
    <TextField
      id="email"
      v-model="state.email"
      autocomplete="email"
      required
      label="E-mail"
      :error="errors.email"
    />
  </form>
</template>
