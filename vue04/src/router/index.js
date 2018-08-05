import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import Login from '@/components/Login'
import MyLogin from '@/components/MyLogin'
import MyRegister from '@/components/MyRegister'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children:[
        {
          path: '',
          name: 'MyLogin',
          component: MyLogin
        },
        {
          path: 'MyRegister',
          name: 'MyRegister',
          component: MyRegister
        }

      ]
    },
  ]
})
