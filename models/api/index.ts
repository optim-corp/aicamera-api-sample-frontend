import CongestionMeetings from '@/models/api/endpoint/congestion-meetings'
import ReserveMeetings from '@/models/api/endpoint/reserve-meetings'

type MeetingModel = {
  URI: CongestionMeetings['URI'] & ReserveMeetings['URI']
  GET_CONGESTION_RESPONSE: CongestionMeetings['GET_RESPONSE']
  GET_RESERVE_RESPONSE: ReserveMeetings['GET_RESPONSE']
}

export type { MeetingModel }
