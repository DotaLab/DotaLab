import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/User/Overview/UserPage'
import HomePage from '@/views/HomePage/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/User/Overview',
      name: 'HelloWorld',
      component: HelloWorld,

    }
  ]
})
