import NProgress from 'nprogress' // progress bar
import { setPageTitle } from '@/utils/index'
import router from './index'
import { getToken } from '@/utils/auth'
import { useUserStore } from '@/store'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = getToken()
  const userStore = useUserStore()

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      userStore.getInfo()
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to) => {
  setPageTitle(to.meta.title)
  NProgress.done()
})
