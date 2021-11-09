type URI = {
  CONGESTION_MEETINGS: '/api/v1/congestion/meetings'
}

type GET_RESPONSE = {
  url: string
  count: string
}

type CongestionMeetings = {
  URI: URI
  GET_RESPONSE: GET_RESPONSE
}

export default CongestionMeetings
