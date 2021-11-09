<template>
  <footer
    class="box-border md:px-4 px-2 py-1 w-full bg-gray-600 text-white relative"
  >
    <div class="h-full flex sm:justify-between flex-col sm:flex-row">
      <div class="py-2">
        <CorporationLogo :src="logo.src" :alt="logo.alt" :styles="styles" />
      </div>
      <div class="mt-auto text-xs">
        &copy;2021 OPTiM Corp.All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CorporationLogo from '@/components/atoms/AppLogo/CorporationLogo.vue'
import AppFooterLogo from '@/components/atoms/AppFooterLogo/index.vue'
import Logo from '@/assets/svg/logo_corp_w.svg'

export default defineComponent({
  name: 'GlobalFooterNavigation',
  components: {
    CorporationLogo
  },
  setup() {
    const styles = { 'w-32': true }
    const logo = {
      src: Logo,
      alt: 'OPTiM'
    }

    return {
      logo,
      styles
    }
  }
})
</script>
