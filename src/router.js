import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'

Vue.use(Router)
export default new Router({
//mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      meta: {title: '首页'}
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('./views/home/model.vue'),
      meta: {title: '模板页面'}
    },
    {
      path: '/invest',
      name: 'invest',
      component: () => import('./views/invest/index.vue'),
      meta: {title: '投资'}
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine/index.vue'),
      meta: {title: '我的'}
    }
  ]
})
