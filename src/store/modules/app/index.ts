import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import defaultSettings from '@/config/settings.json'
import type { AppState } from './types'

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    collapsed: false,
    routes: undefined,
    breadcrumbList: [],
    sourceSettings: {
      action: 'y',
      shape: 'rect',
      color: 'black',
    },
    ...defaultSettings,
  }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state }
    },
  },

  actions: {
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial)
    },

    setRoutes(routes: RouteRecordRaw) {
      this.routes = routes
    },

    setBreadcrumbList(list: any) {
      this.breadcrumbList = list
    },

    setCollapsed(type: boolean) {
      this.collapsed = type
    },

    setSourceSettings(setting: object) {
      this.sourceSettings = setting
    },

    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    },
  },
})

export default useAppStore
