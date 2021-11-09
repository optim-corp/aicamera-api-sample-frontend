import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import meetingRepository from '@/plugins/api/modules/meeting-repository'

export default defineNuxtPlugin(({ $useAxios }, inject) => {
  const api = {
    meeting: meetingRepository($useAxios)
  }

  return inject('api', api)
})

declare module '@nuxt/types' {
  interface Context {
    $api: {
      meeting: ReturnType<typeof meetingRepository>
    }
  }
}
