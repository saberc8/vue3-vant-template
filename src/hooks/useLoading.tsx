import { showToast } from 'vant'
import { onBeforeUnmount } from 'vue'

export function useLoading() {
  let toast: any = null

  const startLoading = () => {
    showToast({
      message: '顶部展示',
      position: 'top',
    });
  }

  return { startLoading }
}
