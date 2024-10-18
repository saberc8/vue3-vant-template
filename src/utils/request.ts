import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosHeaders } from 'axios'
import { showSuccessToast, showFailToast } from 'vant'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import { CodeMessage } from '@/config/constants'
import type { CustomAxiosRequestConfig } from '@/types/global'
import router from '@/router'
export interface BaseResponse<T = any> {
  code: number
  data: T
  message: string
}

const service = Axios.create({
  baseURL: (import.meta.env.VITE_API_URL as string) || undefined,
  timeout: 5000,
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()

    const token = getToken()
    if (token) {
      config.headers = { ...config.headers } as AxiosHeaders
      config.headers['Authorization'] = token
      // 'X-Access-Token'
      config.headers['X-Access-Token'] = token
    }
    return config
  },
  (error: { message: string }) => {
    NProgress.done()
    showFailToast(error.message)
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    const { data } = response
    const { code, message } = data
    if (typeof code !== 'undefined' && code !== 0 && code !== 200) {
      showFailToast(message)
      return Promise.reject(new Error(message || 'Error'))
    }
    NProgress.done()
    return Promise.resolve(data.result)
  },
  (error: AxiosError) => {
    NProgress.done()
    // code 401
    if (error.response?.status === 401) {
      showFailToast('登录过期，请重新登录')
      router.push({ name: 'login' })
      return Promise.reject(new Error('登录过期，请重新登录'))
    }
    const response = Object.assign({}, error.response)
    response && showFailToast(CodeMessage[response.status] || '系统异常')

    return Promise.reject(error)
  },
)

const request = <T = any>(config: CustomAxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request<BaseResponse<T>>(config)
      .then((res: AxiosResponse) => resolve(res))
      .catch((err: { message: string }) => reject(err))
  })
}

request.get = <T = any>(url: string, params?: object): Promise<T> =>
  request({
    method: 'get',
    url,
    params,
  })

request.post = <T = any>(url: string, params?: object): Promise<T> =>
  request({
    method: 'post',
    url,
    data: params,
  })

request.delete = <T = any>(url: string, params?: object): Promise<T> =>
  request({
    method: 'delete',
    url,
    params,
  })

request.put = <T = any>(url: string, params?: object): Promise<T> =>
  request({
    method: 'put',
    url,
    data: params,
  })

request.patch = <T = any>(url: string, params?: object): Promise<T> =>
  request({
    method: 'patch',
    url,
    data: params,
  })

export default request
