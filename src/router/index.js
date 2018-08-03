import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/User/Overview/UserPage'

import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'
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
      path: '/User/Matches',
      name: 'Matches',
      component: Matches
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
    },
    {
      path: '/Userpage/overmatches',
      name: 'Overmatches',
      component: Overmatches
    },
    {
      path: '/Userpage/ranktable',
      name: 'RankTable',
      component: RankTable
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
