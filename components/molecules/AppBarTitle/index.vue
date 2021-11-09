<template>
  <div class="flex items-center">
    <AppLogo :src="_logo.src" :alt="_logo.alt" />
    <AppTitle :title="_title" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import AppLogo from '@/components/atoms/AppLogo/index.vue'
import AppTitle from '@/components/atoms/AppTitle/index.vue'

export default defineComponent({
  name: 'AppBarTitle',
  components: {
    AppLogo,
    AppTitle
  },
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    },
    logo: {
      type: Object as PropType<{ src: string; alt: string }>,
      default: () => {}
    }
  },
  setup(props) {
    const { title: _title, logo: _logo } = toRefs(props)

    return {
      _title,
      _logo
    }
  }
})
</script>
