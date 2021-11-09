<template>
  <div class="text-t-primary md:text-xl text-base font-bold">
    {{ _month }}/{{ _day }} {{ _hour }}:{{ _min }}:{{ _sec }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppCurrentDate',
  props: {
    month: {
      type: String as PropType<string>,
      default: '00'
    },
    day: {
      type: String as PropType<string>,
      default: '00'
    },
    hour: {
      type: String as PropType<string>,
      default: '00'
    },
    min: {
      type: String as PropType<string>,
      default: '00'
    },
    sec: {
      type: String as PropType<string>,
      default: '00'
    }
  },
  setup(props) {
    const {
      month: _month,
      day: _day,
      hour: _hour,
      min: _min,
      sec: _sec
    } = toRefs(props)

    return {
      _month,
      _day,
      _hour,
      _min,
      _sec
    }
  }
})
</script>
