import { StoreKey } from '@/config/constants'

const TokenKey = `${StoreKey}-Token`

const isLogin = () => {
  return !!localStorage.getItem(TokenKey)
}

const getToken = () => {
  return localStorage.getItem(TokenKey)
}

const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token)
}

const removeToken = () => {
  localStorage.removeItem(TokenKey)
}

export { isLogin, getToken, setToken, removeToken }
