import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'

import User from '@/views/User/Overview/UserPage'
import Overmatches from '@/components/UserMatchbutton'
import RankTable from '@/components/Table/RankTable'

import Press from '@/components/Press'
import News_s from '@/components/News_s'
import test_ue from '@/views/test_ue'
import ue from '@/components/ue'

import Detail from '@/views/User/detail'
import Overviews from '@/views/User/detail/Overview'
import Farm from '@/views/User/detail/Farm'
import Graphs from '@/views/User/detail/Graphs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      children:[
        {
          path: '/overmatches',
          name: 'Overmatches',
          component: Overmatches
        },
        {
          path: '/ranktable',
          name: 'RankTable',
          component: RankTable
        }
      ]
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children:[
        {
          path: '/overviews',
          name: 'Overviews',
          component: Overviews
        },
        {
          path: '/farm',
          name: 'Farm',
          component: Farm
        },
        {
          path: '/graphs',
          name: 'Graphs',
          component: Graphs
        }
      ]
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
