import { createRouter, createWebHashHistory } from 'vue-router'

// 路由匹配规则
const routes = [
  {
    // 主页路由
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        // 子路由匹配
        path: '/employee',
        name: 'employee',
        component: () => import('@/views/employees/list.vue')
      }
    ]
  },
  // 登录路由
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/admins/login.vue')
  }
]

// 创建路由匹配对象，并定义历史记录模式 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 到处实例对象 
export default router
