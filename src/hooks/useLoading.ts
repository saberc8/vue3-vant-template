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
  }
  const stopLoading = () => {
    toast && toast.clear()
  }

  onBeforeUnmount(stopLoading)

  return { startLoading, stopLoading }
}
