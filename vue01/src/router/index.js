import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Foot from '@/components/foot'
import News from '@/components/News'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/foot',
      name: 'foot',
      component: Foot
    },
    {
      path: '/News',
      name: 'News',
      component:News
    },
    {
      path: '/Home',
      name: 'Home',
      component:Home
    }
  ]
})
