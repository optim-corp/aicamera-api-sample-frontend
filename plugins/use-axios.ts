import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default defineNuxtPlugin((ctx, inject) => {
  const $useAxios = ctx.$axios.create()
  $useAxios.onError((error) => {
    // eslint-disable-next-line no-console
    console.error(error.message, error.code)
  })
  return inject('useAxios', $useAxios)
})

declare module '@nuxt/types' {
  interface Context {
    $useAxios: NuxtAxiosInstance
  }
}
