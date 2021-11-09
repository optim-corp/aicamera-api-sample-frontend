<template>
  <div
    class="
      bg-white
      min-w-meeting-item
      rounded-lg
      box-border
      px-4
      md:h-14
      h-12
      shadow
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppMeetingItemFrame'
})
</script>
