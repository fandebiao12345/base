import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import a from './a.vue'
import b from './b.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/app1'
  // },
  // {
  //   path: '/a',
  //   name: 'a',
  //   component: a
  // },
  // {
  //   path: '/b',
  //   name: 'b',
  //   component: b
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
  
})

export default router
