<template>
  <AppMeetingItemFrame>
    <div class="h-full flex justify-between items-center">
      <AppMeetingItemLabel>
        <span :class="{ 'text-disabled': !_isMeetingState }">
          {{ _meetingLabel }}
        </span>
      </AppMeetingItemLabel>
      <AppCheckboxIcon
        :is-active="_isMeetingState"
        :active-style="_activeStyle"
      />
    </div>
  </AppMeetingItemFrame>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

import AppMeetingItemFrame from '@/components/atoms/AppMeetingItemFrame/index.vue'
import AppMeetingItemLabel from '@/components/atoms/AppMeetingItemLabel/index.vue'
import AppCheckboxIcon from '@/components/atoms/AppCheckboxIcon/index.vue'

export default defineComponent({
  name: 'AppMeetingItem',
  components: {
    AppMeetingItemFrame,
    AppMeetingItemLabel,
    AppCheckboxIcon
  },
  props: {
    isMeetingState: {
      type: Object as PropType<object>,
      default: () => {}
    },
    meetingLabel: {
      type: String as PropType<string>,
      default: ''
    },
    activeStyle: {
      type: Object as PropType<object>,
      default: () => {}
    }
  },
  setup(props) {
    const {
      isMeetingState: _isMeetingState,
      meetingLabel: _meetingLabel,
      activeStyle: _activeStyle
    } = toRefs(props)

    return {
      _isMeetingState,
      _meetingLabel,
      _activeStyle
    }
  }
})
</script>
