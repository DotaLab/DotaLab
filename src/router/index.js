import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'
import User from '@/views/User/Overview/UserPage'
import Overmatches from '@/components/UserMatchbutton'
import RankTable from '@/components/Table/RankTable'
import Matches from '@/views/User/detail/Overview'
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
      path: '/matches',
      name: 'Matches',
      component: Matches
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
    },
    {
      path: '/Userpage/farm',
      name: 'Farm',
      component: Farm
    },
    {
      path: '/Userpage/graphs',
      name: 'Graphs',
      component: Graphs
    }
  ]
})
