import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    count:0,
    // 全局的用户ID属性
    UserId:''
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
  }
})