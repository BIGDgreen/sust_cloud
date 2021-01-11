import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/fileList',
    children: [
      {
        path: '/fileList',
        name: 'FileList',
        component: () => import('@/views/FileManage/FileList.vue')
      },
      {
        path: '/uploadFile',
        name: 'UploadFile',
        component: () => import('@/views/FileManage/UploadFile.vue')
      },
      {
        path: '/recycleBin',
        name: 'RecycleBin',
        component: () => import('@/views/FileManage/RecycleBin.vue')
      },
      {
        path: '/member',
        name: 'MemberManage',
        component: () => import('@/views/MemberManage.vue')
      },
      {
        path: '/user',
        name: 'UserInfo',
        component: () => import('@/views/UserInfo.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/resetPwd',
    name: 'ResetPwd',
    component: () => import('@/views/ResetPwd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// let whiteList = ['Login', 'PhoneLogin', 'ResetPwd']
// router.beforeEach((to, from, next) => {
//   if (!whiteList.includes(to.name)) {
//     // 做登录校验
//     const username = localStorage.getItem('username')
//     if (!username) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next();
//   }
// })

export default router
