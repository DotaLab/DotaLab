import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/User/Overview/UserPage'

import Test from '@/views/Test/Test.vue'
import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'
import Press from '@/components/Press'
import News_s from '@/components/News_s'
import test_ue from '@/views/test_ue'
import ue from '@/components/ue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/User/Overview',
      name: 'HelloWorld',
      component: HelloWorld
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
    },
    {
      path:'/News',
      name: 'News',
      component: News,
      redirect: '/Press',
      children: [
        {
          path: '/Press',
          name: 'Press',
          component: Press
        },
        {
          path: '/News_s',
          name: 'News_s',
          component: News_s
        }
      ]
    },
    {
      path: '/test_ue',
      name: 'test_ue',
      component: test_ue
    },,
    {
      path: '/ue',
      name: 'ue',
      component: ue
    }
   
  ]
})
