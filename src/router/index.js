import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/User/Overview/UserPage'

import Test from '@/views/Test/Test.vue'
import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/User/Overview',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/News',
      name: 'News',
      component: News
    },
    {
      path: '/Hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/Skill/:key',
      name: 'Skill',
      component: Skill
    }
  ]
})
