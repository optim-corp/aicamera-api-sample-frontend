<template>
  <div class="md:col-span-8 col-span-4 pt-4">
    <MeetingContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import MeetingContent from '@/components/organisms/MeetingContent'

export default defineComponent({
  components: {
    MeetingContent
  },
  layout() {
    return 'default'
  }
})
</script>
