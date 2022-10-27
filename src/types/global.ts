import type { AxiosRequestConfig } from 'axios'

export interface AnyObject {
  [key: string]: unknown
}

export interface Options {
  value: unknown
  label: string
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  hideLoading?: boolean
}

export interface Pagination {
  page: number
  limit: number
  total?: number
  showJumper?: boolean
  showTotal?: boolean
  showPageSize?: boolean
}
