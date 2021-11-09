<template>
  <div>
    <GlobalHeaderNavigation />
    <div
      class="
        min-h-screen
        max-w-md-width
        mx-auto
        grid
        md:grid-cols-8
        grid-cols-4
        gap-4
        box-border
        md:px-8
        sm:px-4
        px-2
      "
    >
      <Nuxt />
    </div>
    <GlobalFooterNavigation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import GlobalHeaderNavigation from '@/components/organisms/GlobalHeaderNavigation/index.vue'
import GlobalFooterNavigation from '@/components/organisms/GlobalFooterNavigation/index.vue'

export default defineComponent({
  components: {
    GlobalHeaderNavigation,
    GlobalFooterNavigation
  }
})
</script>
