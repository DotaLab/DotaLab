import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/User/Overview/UserPage'
import HomePage from '@/views/HomePage/HomePage'
import Test from '@/views/Test/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/User/Overview',
      name: 'HelloWorld',
      component: HelloWorld,

    }
  ]
})
