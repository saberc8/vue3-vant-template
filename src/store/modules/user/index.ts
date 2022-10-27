import { defineStore } from 'pinia'
import { login as userLogin, logout as userLogout, type LoginData } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import type { UserState } from './types'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),
  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    },
  },

  actions: {
    // Reset user's information
    resetInfo() {
      this.$reset()
    },

    // Login
    async getInfo() {
      return { username: 'admin', password: 123 }
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm)
        setToken(res.token)
      } catch (err) {
        removeToken()
        throw err
      }
    },

    // Logout
    async logout() {
      await userLogout()

      this.resetInfo()
      removeToken()
    },
  },
})

export default useUserStore
