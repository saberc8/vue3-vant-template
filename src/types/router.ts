export interface IRouteBase {
  path: string
  label?: string // 菜单项标题
  title?: string // 设置收缩时展示的悬浮标题
  icon?: any
  name?: string
  key?: string
  exact?: boolean
  meta?: MetaProps
  children?: Array<IRouteBase>
  // 302 跳转
  redirect?: string
  hidden?: boolean
}

export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

export interface IRoute extends IRouteBase {
  children?: IRoute[]
}

export interface MenuInfo {
  key: string
  keyPath: string[]
  item: any
  domEvent: any
}
