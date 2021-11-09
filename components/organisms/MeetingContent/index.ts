import {
  defineComponent,
  reactive,
  toRefs,
  h,
  useContext,
  useAsync,
  computed,
  Ref
} from '@nuxtjs/composition-api'
import type {
  ContainerState,
  PresenterProps,
  ActiveStyle
} from '@/models/ui/meeting-content'

import PresenterMeetingContent from '@/components/organisms/MeetingContent/PresenterMeetingContent.vue'

export default defineComponent({
  name: 'MeetingContent',
  setup() {
    const { $api } = useContext()
    const { isReserve, isUsing } = toRefs(
      reactive<ContainerState>({
        isReserve: false,
        isUsing: false
      })
    )

    const presenterState = reactive<PresenterProps>({
      roomName: 'TK_リフレッシュスペース1(モニタあり4名ソファ)',
      congestionImage: {
        src: '',
        alt: ''
      },
      currentDate: {
        month: '0',
        day: '0',
        hour: '0',
        sec: '0',
        min: '0'
      },
      items: [
        {
          meetingLabel: '予約アリ',
          isMeetingState: isReserve,
          activeStyle: computed(() => activeColor(isReserve.value))
        },
        {
          meetingLabel: '使用中',
          isMeetingState: isUsing,
          activeStyle: computed(() => activeColor(isUsing.value))
        }
      ]
    })

    useAsync(async () => {
      getCurrentDate()
      await getCongestion()
      await getIsReserve()
    })

    // batch functions
    setInterval(async () => {
      await getCongestion()
      await getIsReserve()
    }, 30000)

    setInterval(() => {
      getCurrentDate()
    }, 1000)

    // functions
    async function getCongestion() {
      const result = await $api.meeting.getCongestion(0)
      presenterState.congestionImage.src = result.url
      handleIsState(isUsing, result.count !== '0')
    }

    async function getIsReserve() {
      const result = await $api.meeting.getIsReserve(0)
      handleIsState(isReserve, result)
    }

    function ReturnTwoDigits(num: number): string {
      const strNum = String(num)
      return strNum.length !== 1 ? strNum : ('00' + strNum).slice(-2)
    }

    function getCurrentDate() {
      const date = new Date()
      presenterState.currentDate = {
        ...presenterState.currentDate,
        month: ReturnTwoDigits(date.getMonth() + 1),
        day: ReturnTwoDigits(date.getDate()),
        hour: ReturnTwoDigits(date.getHours()),
        sec: ReturnTwoDigits(date.getSeconds()),
        min: ReturnTwoDigits(date.getMinutes())
      }
    }

    function handleIsState(state: Ref<boolean>, bool: boolean) {
      state.value = bool
    }

    function activeColor(bool: boolean): ActiveStyle {
      return bool ? { 'text-accent': true } : { 'text-disable': true }
    }

    return () =>
      h(PresenterMeetingContent, {
        props: {
          roomName: presenterState.roomName,
          congestionImage: presenterState.congestionImage,
          currentDate: presenterState.currentDate,
          items: presenterState.items
        }
      })
  }
})
