<template>
  <img :class="_styles" :src="_src" :alt="_alt" />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CorporationLogo',
  props: {
    src: {
      type: String as PropType<string>,
      default: ''
    },
    alt: {
      type: String as PropType<string>,
      default: 'ロゴ'
    },
    styles: {
      type: Object as PropType<object>,
      default: () => {}
    }
  },
  setup(props) {
    const { src: _src, alt: _alt, styles: _styles } = toRefs(props)

    return {
      _src,
      _alt,
      _styles
    }
  }
})
</script>
