import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let whiteList = ['Login', 'PhoneLogin']
router.beforeEach((to, from, next) => {
  if (!whiteList.includes(to.name)) {
    // 做登录校验
    const username = localStorage.getItem('username')
    if (!username) {
      next('/login')
    } else {
      next()
    }
  } else {
    next();
  }
})

export default router
