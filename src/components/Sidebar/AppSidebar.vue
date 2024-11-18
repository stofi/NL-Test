<script lang="ts" setup>
import UserInfo from './UserInfo.vue'
import MenuItem from './MenuItem.vue'
import AppButton from '@/components/AppButton.vue'
import AppCard from '@/components/AppCard.vue'
import {
  ShoppingBagIcon,
  DocumentCheckIcon,
  HeartIcon,
  CircleStackIcon,
  TagIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  {
    title: 'Moje objednávky',
    icon: ShoppingBagIcon,
    route: '/order',
  },
  {
    title: 'Faktury',
    icon: DocumentCheckIcon,
    route: '/invoice',
  },
  {
    title: 'Seznam přání',
    icon: HeartIcon,
    route: '/wishlist',
  },
  {
    title: 'Věrnostní program',
    icon: CircleStackIcon,
    route: '/loyalty',
  },
  {
    title: 'Slevové kódy',
    icon: TagIcon,
    route: '/discount',
  },
  {
    title: 'Hlídané zboží',
    icon: MagnifyingGlassIcon,
    route: '/watched',
  },
  {
    title: 'Nastavení účtu',
    icon: Cog6ToothIcon,
    route: '/account',
  },
]
</script>
<template>
  <AppCard class="flex flex-col gap-3 pb-8">
    <UserInfo name="John Doe" email="john.doe@example.com" />
    <ul class="flex flex-col gap-3">
      <li v-for="item in navigation" :key="item.route">
        <MenuItem v-bind="item">
          <template #icon>
            <component :is="item.icon" class="h-5 stroke-2" />
          </template>
        </MenuItem>
      </li>
    </ul>
    <AppButton color="danger" label="Odhlásit se" class="mt-3" />
  </AppCard>
</template>
