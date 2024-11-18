<script setup lang="ts">
import CheckBox from '@/components/Input/CheckBox.vue'
import { reactive, watch } from 'vue'
import { z } from 'zod'

const schema = z.object({
  newsletter: z.boolean(),
  satisfactionSurvey: z.boolean(),
})

type SettingsState = z.infer<typeof schema>

const state = reactive<SettingsState>({
  newsletter: true,
  satisfactionSurvey: false,
})

const errors = reactive({
  newsletter: '',
  satisfactionSurvey: '',
})

const validate = () => {
  const result = schema.safeParse(state)
  if (!result.success) {
    errors.newsletter = ''
    errors.satisfactionSurvey = ''
    for (const error of result.error.errors) {
      errors[error.path[0] as keyof SettingsState] = error.message
    }
    return false
  }
  return true
}

watch(state, validate)
</script>

<template>
  <form class="flex flex-col gap-2" role="group" aria-label="Nastavení e-mailových notifikací">
    <CheckBox
      id="satisfactionSurvey"
      v-model="state.satisfactionSurvey"
      label="Nesouhlasím se zaslánim dotazníku spokojenosti Ověřeno zákazníky"
      :error="errors.satisfactionSurvey"
    />
    <CheckBox
      id="newsletter"
      v-model="state.newsletter"
      label="Přeji si dostávat informace o novinkách a slevách nebo inspiraci"
      :error="errors.newsletter"
    />
  </form>
</template>
