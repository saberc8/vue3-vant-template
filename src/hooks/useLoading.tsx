import { Toast } from 'vant'
import { onBeforeUnmount } from 'vue'

export function useLoading() {
  let toast: any = null

  const startLoading = () => {
    toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      message: 'Loading...',
    })
    console.log(toast)
  }
  const stopLoading = () => {
    console.log('stop')
  }

  onBeforeUnmount(stopLoading)

  return { startLoading, stopLoading }
}
