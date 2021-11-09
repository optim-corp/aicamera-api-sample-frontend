import { NuxtAxiosInstance } from '@nuxtjs/axios'
import type { MeetingModel } from '@/models/api/index'

export default ($useAxios: NuxtAxiosInstance) => {
  const routes: MeetingModel['URI'] = {
    CONGESTION_MEETINGS: `/api/v1/congestion/meetings`,
    RESERVE_MEETINGS: `api/v1/reserve/meetings`
  }

  const meetingRepository = new MeetingRepository($useAxios, routes)
  return meetingRepository
}

class MeetingRepository {
  private axios: NuxtAxiosInstance
  private routes: MeetingModel['URI']

  constructor($useAxios: NuxtAxiosInstance, routes: MeetingModel['URI']) {
    this.axios = $useAxios
    this.routes = routes
  }

  async getCongestion(cameraId: number) {
    const res: MeetingModel['GET_CONGESTION_RESPONSE'] = await this.axios.$get(
      `${this.routes.CONGESTION_MEETINGS}/${cameraId}`
    )
    return res
  }

  async getIsReserve(meetingsId: number) {
    const res: MeetingModel['GET_RESERVE_RESPONSE'] = await this.axios.$get(
      `${this.routes.RESERVE_MEETINGS}/${meetingsId}`
    )
    return res.is_meeting_reserve
  }
}
