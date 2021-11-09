import { ComputedRef } from '@nuxtjs/composition-api'

type MeetingRoomName = string
type MeetingLabel = '予約アリ' | '使用中'
export type ActiveStyle = { 'text-accent': true } | { 'text-disable': true }

type MeetingCongestionImage = {
  congestionImage: {
    src: string
    alt: string
  }
}

type CurrentDate = {
  month: string
  day: string
  hour: string
  sec: string
  min: string
}

export type MeetingItem = {
  meetingLabel: MeetingLabel
  isMeetingState: ComputedRef<boolean>
  activeStyle: ComputedRef<ActiveStyle>
}

export type PresenterProps = {
  roomName: MeetingRoomName
  currentDate: CurrentDate
  items: MeetingItem[]
} & MeetingCongestionImage

export type ContainerState = {
  isReserve: boolean
  isUsing: boolean
}
