<template>
  <!-- enable -->
  <svg
    v-if="_isActive"
    :class="[_activeStyle, commonStyle]"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
    />
  </svg>

  <!-- disable -->
  <svg
    v-else
    :class="[_activeStyle, commonStyle]"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    />
  </svg>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  computed
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppCheckboxIcon',
  props: {
    isActive: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    activeStyle: {
      type: Object as PropType<object>,
      default: () => {}
    }
  },
  setup(props) {
    const { isActive: _isActive, activeStyle: _activeStyle } = toRefs(props)
    const commonStyle = {
      'fill-current': true
    }

    return {
      _isActive,
      _activeStyle,
      commonStyle
    }
  }
})
</script>
