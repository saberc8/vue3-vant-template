import request from '@/utils/request'
import type { UserState } from '@/store/modules/user/types'

export interface LoginData {
  username: string
  password: string
}

export interface LoginRes {
  token: string
}
export const login = (data: LoginData) => request.post<LoginRes>('/user/login', data)
export const logout = () => request.post<LoginRes>('/user/logout')
export const getUserInfo = () => request.post<UserState>('/user/info')
