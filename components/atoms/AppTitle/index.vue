<template>
  <h1 class="cursor-default pl-1 font-bold text-t-primary leading-9">
    {{ _title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppTitle',
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props) {
    const { title: _title } = toRefs(props)

    return { _title }
  }
})
</script>
