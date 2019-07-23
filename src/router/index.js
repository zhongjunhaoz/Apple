import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index'
import mac from '../components/list/mac'
import ipad from '../components/list/ipad'
import music from '../components/list/music'
import techSupport from '../components/list/techSupport'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mac',
      name: 'mac',
      component: mac
    },
    {
      path: '/ipad',
      name: 'ipad',
      component: ipad
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/techSupport',
      name: 'techSupport',
      component: techSupport
    },
  ]
})
