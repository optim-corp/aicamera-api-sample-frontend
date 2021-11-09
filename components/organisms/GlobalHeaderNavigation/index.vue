<template>
  <header
    class="
      sticky
      top-0
      z-50
      w-full
      h-14
      box-border
      md:px-4
      px-2
      flex
      items-center
      shadow-md
      bg-white
    "
  >
    <AppBarTitle :logo="logo" :title="title" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppBarTitle from '@/components/molecules/AppBarTitle/index.vue'
import Logo from '@/assets/svg/logo.svg'

export default defineComponent({
  name: 'GlobalHeaderNavigation',
  components: {
    AppBarTitle
  },
  setup() {
    const title = 'カイギジョウホウ！'
    const logo = {
      src: Logo,
      alt: title
    }

    return {
      title,
      logo
    }
  }
})
</script>
