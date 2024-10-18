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
        keepAlive: true,
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
      path: '/basic/my',
      name: 'my',
      component: () => import('@/views/basic/my/index.vue'),
      meta: {
        title: '我的',
        icon: 'icon-dashboard',
      },
    },
    {
      path: '/basic/question-detail/:id',
      name: 'question-detail',
      component: () => import('@/views/basic/question-detail/index.vue'),
      meta: {
        title: '试卷',
        requiresAuth: true,
      },
    },
  ],
}
