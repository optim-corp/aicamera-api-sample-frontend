<template>
  <div class="w-full">
    <div class="text-center" :class="styles.spacing">
      <AppSectionText>{{ _roomName }}</AppSectionText>
    </div>

    <div class="mx-auto" :class="styles.spacing">
      <AppCongestionImage
        :src="_congestionImage.src"
        :alt="_congestionImage.alt"
      />
    </div>

    <div class="text-center" :class="styles.spacing">
      <AppCurrentDate
        :month="_currentDate.month"
        :day="_currentDate.day"
        :hour="_currentDate.hour"
        :min="_currentDate.min"
        :sec="_currentDate.sec"
      />
    </div>

    <div
      v-for="item in items"
      :key="item.meetingLabel"
      :class="[styles.meetingItem, styles.spacing]"
    >
      <AppMeetingItem
        :is-meeting-state="item.isMeetingState"
        :meeting-label="item.meetingLabel"
        :active-style="item.activeStyle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import type { PresenterProps } from '@/models/ui/meeting-content'

import AppSectionText from '@/components/atoms/AppSectionText/index.vue'
import AppCongestionImage from '@/components/atoms/AppCongestionImage/index.vue'
import AppCurrentDate from '@/components/atoms/AppCurrentDate/index.vue'
import AppMeetingItem from '@/components/molecules/AppMeetingItem/index.vue'

export default defineComponent({
  name: 'PresenterMeetingContent',
  components: {
    AppSectionText,
    AppCongestionImage,
    AppCurrentDate,
    AppMeetingItem
  },
  props: {
    roomName: {
      type: String as PropType<PresenterProps['roomName']>,
      default: 'Meeting Room A'
    },
    congestionImage: {
      type: Object as PropType<PresenterProps['congestionImage']>,
      default: () => {}
    },
    currentDate: {
      type: Object as PropType<PresenterProps['currentDate']>,
      default: () => {}
    },
    items: {
      type: Array as PropType<PresenterProps['items']>,
      default: () => []
    }
  },
  setup(props: PresenterProps) {
    const {
      roomName: _roomName,
      congestionImage: _congestionImage,
      currentDate: _currentDate,
      items: _items
    } = toRefs(props)

    const styles = {
      meetingItem: {
        'w-1/2': true,
        'min-w-meeting-item': true,
        'mx-auto': true
      },
      spacing: { 'mb-2': true }
    }

    return {
      _roomName,
      _congestionImage,
      _currentDate,
      _items,
      styles
    }
  }
})
</script>
