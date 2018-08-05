import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/HomePage/Home'
import News from '@/views/News'
import Hero from '@/views/Hero'
import Skill from '@/views/Skill'

import User from '@/views/User/Overview/UserPage'
import Overmatches from '@/components/UserMatchbutton'
import RankTable from '@/components/Table/RankTable'
import UserHero from '@/views/User/UserHero'
import HeroRankUser from '@/views/User/HeroRankUser'

import Press from '@/components/Press'
import News_s from '@/components/News_s'
import test_ue from '@/views/test_ue'
import ue from '@/components/ue'

import Detail from '@/views/User/detail'
import Overviews from '@/views/User/detail/Overview'
import Farm from '@/views/User/detail/Farm'
import Graphs from '@/views/User/detail/Graphs'

import HeroRank from '@/views/HeroInfo/HeroRank'
import HeroHB from '@/views/HeroInfo/HeroHB'
import HeroTime from '@/views/HeroInfo/HeroTime'

import Loginback from '@/views/Login'
import Login from '@/views/MyLogin'
import Register from '@/views/MyRegister'

import Item from '@/views/Item'


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
        },
        {
          path: '/userHero',
          name: 'UserHero',
          component: UserHero
        }
      ]
    },
    {
      path: '/loginback',
      name: 'Loginback',
      component: Loginback,
      redirect:"/login",
      children:[
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    },
    
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      redirect: '/overviews',
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
      component: Skill,
      children:[
        {
          path:'/heroRank',
          name: 'HeroRank',
          component: HeroRank
        },
        {
          path:'/heroHB',
          name: 'HeroHB',
          component: HeroHB
        },
        {
          path:'/heroTime',
          name: 'HeroTime',
          component: HeroTime
        }
      ]
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
    },
    {
      path: '/ue',
      name: 'ue',
      component: ue
    },
    {
      path: '/Item',
      name: 'Item',
      component: Item
    }

  ]
})
