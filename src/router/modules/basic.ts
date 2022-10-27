export default {
  path: '/basic',
  name: 'basic',
  component: () => import('@/layouts/index.vue'),
  redirect: '/basic/dashboard',
  meta: {
    requiresAuth: true,
    title: '基础',
    icon: 'icon-home',
  },
  children: [
    {
      path: '/basic/dashboard',
      name: 'home',
      component: () => import('@/views/basic/dashboard/index.vue'),
      meta: {
        title: '首页',
        icon: 'icon-dashboard',
      },
    },
    {
      path: '/basic/category',
      name: 'category',
      component: () => import('@/views/basic/category/index.vue'),
      meta: {
        title: '分类',
        icon: 'icon-dashboard',
      },
    },
    {
      path: '/basic/me',
      name: 'me',
      component: () => import('@/views/basic/me/index.vue'),
      meta: {
        title: '我',
        icon: 'icon-dashboard',
      },
    },
  ],
}
