import { version } from '../../package.json'
import type { Pagination } from '@/types/global'

interface ICodeMessage {
  [propName: number]: string
}

export const CodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

// export const BASE_URL = import.meta.env.VITE_BASE_URL
export const APP_VERSION = version
// 空白页面
export const BlankList = ['/example/blank']
// 项目英文名称
export const ProjectName = 'Vue3 vant Admin'
export const ProjectTitle = ProjectName.replace(/\s+/g, '')
// 项目中文名称
export const ProjectKeywords = '一个普通的开发模板'
// 存储 key
export const StoreKey = `${ProjectTitle}-${APP_VERSION}`
// 登录地址
export const LoginPath = '/login'
// 首页地址
export const HomePath = '/basic/dashboard'
// 仓库地址
export const Github = 'https://github.com/jsfront/vue3-vant-admin'
export const Gitee = 'https://gitee.com/jsfront/vue3-vant-admin'
// 高德地图Key
export const AmapKey = '5cba689fb2461a03e566698a6ead52cd'
// Dialog 标题
export const TitleMap: any = { create: '新增', update: '修改', delete: '删除' }
// 分页配置
export const BasePagination: Pagination = { page: 1, limit: 10, showJumper: true, showTotal: true, showPageSize: false }
