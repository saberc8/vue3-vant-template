import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import { CodeMessage } from '@/config/constants'
import type { CustomAxiosRequestConfig } from '@/types/global'

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
      config.headers!.token = token
    }
    return config
  },
  (error: { message: string }) => {
    Toast.fail(error.message)
  }
)

service.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    const { data } = response
    const { code, msg } = data

    if (typeof code !== 'undefined' && code !== 0) {
      Toast.fail(msg)
      return Promise.reject(new Error(msg || 'Error'))
    }

    NProgress.done()
    return Promise.resolve(data)
  },
  (error: AxiosError) => {
    NProgress.done()
    Toast.clear()

    const response = Object.assign({}, error.response)
    response && Toast.fail(CodeMessage[response.status] || '系统异常')

    return Promise.reject(error)
  }
)

const request = <T = any>(config: CustomAxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request<BaseResponse<T>>(config)
      .then((res: AxiosResponse) => resolve(res.data))
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
