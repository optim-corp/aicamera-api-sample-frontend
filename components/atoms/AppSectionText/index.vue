<template>
  <h2 class="md:text-xl text-base text-t-primary font-bold">
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppSectionText'
})
</script>
