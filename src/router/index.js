import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import ProblemPage from '../components/ProblemPage.vue'
import UserPage from '../components/UserPage.vue'
import ManagePage from '../components/ManagePage.vue'

import { jwtDecode } from "jwt-decode";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/Problem',
    name: 'Problem',
    component: ProblemPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/User',
    name: 'User',
    component: UserPage,
    meta: { requiresAuth: true }
  }
  ,
  {
    path: '/Manage',
    name: 'Manage',
    component: ManagePage,
    meta: { requiresAuth: true, requiresAdmin: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (to.meta.requiresAuth) {
    let decoded
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      next({
        path: '/Login'
      })
      return
    }

    let isLogin = true
    console.log(decoded);
    let roleID = decoded.roleID
    console.log(isLogin, to.meta.requiresAuth, to.meta.requiresAdmin);
    if (isLogin && !to.meta.requiresAdmin) {
      next()
    }
    else if (isLogin && to.meta.requiresAdmin) {
      if (roleID == 1) next()
      else {
        next({
          path: '/'
        })
      }
    }
    else {
      next({
        path: '/Login'
      })
    }
  } else {
    next()
  }
})


export default router
