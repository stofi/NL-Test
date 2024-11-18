<script setup lang="ts">
import BillingInfoForm from './BillingInfoForm.vue'
import ContactInfoForm from './ContactInfoForm.vue'
import SettingsForm from './SettingsForm.vue'
import AppCard from '@/components/AppCard.vue'

import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <AppCard class="flex flex-col gap-8">
    <ContactInfoForm />
    <BillingInfoForm />
    <SettingsForm />
    <div class="flex flex-col w-full gap-3 md:flex-row">
      <AppButton label="Uložit změny" />
      <AppButton variant="outline" label="Změnit heslo" />
      <AppButton
        class="mt-4 md:mt-0 md:ml-auto"
        color="danger"
        variant="outline"
        label="Zrušit účet"
      />
    </div>
  </AppCard>
</template>
