type URI = {
  RESERVE_MEETINGS: `api/v1/reserve/meetings`
}

type GET_RESPONSE = {
  // eslint-disable-next-line camelcase
  is_meeting_reserve: boolean
}

type ReserveMeetings = {
  URI: URI
  GET_RESPONSE: GET_RESPONSE
}

export default ReserveMeetings
