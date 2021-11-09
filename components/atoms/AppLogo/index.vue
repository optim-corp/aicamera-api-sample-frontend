<template>
  <img class="w-9 h-9 text-t-primary fill-current" :src="_src" :alt="_alt" />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppLogo',
  props: {
    src: {
      type: String as PropType<string>,
      default: ''
    },
    alt: {
      type: String as PropType<string>,
      default: 'ロゴ'
    }
  },
  setup(props) {
    const { src: _src, alt: _alt } = toRefs(props)
    return {
      _src,
      _alt
    }
  }
})
</script>
