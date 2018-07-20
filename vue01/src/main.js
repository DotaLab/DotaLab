// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import first1 from './components/First'
import News from './components/News'
import HelloWorld from '@/components/HelloWorld'

Vue.component('ces', first1)
Vue.component('news', News)
Vue.component('hello', HelloWorld)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
