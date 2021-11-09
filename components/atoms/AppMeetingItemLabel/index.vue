<template>
  <div class="text-t-secondary text-base font-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppMeetingItemLabel'
})
</script>
