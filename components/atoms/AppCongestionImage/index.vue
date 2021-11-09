<template>
  <div
    class="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden bg-white"
    :class="styles"
  >
    <img v-if="_src !== ''" class="w-full" :src="_src" :alt="_alt" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  toRefs
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppCongestionImage',
  props: {
    src: {
      type: String as PropType<string>,
      default: ''
    },
    alt: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props) {
    const { src: _src, alt: _alt } = toRefs(props)

    const styles = computed(() => {
      return _src.value === ''
        ? {
            'cursor-wait': true,
            'animate-pulse': true
          }
        : {}
    })

    return {
      styles,
      _src,
      _alt
    }
  }
})
</script>
