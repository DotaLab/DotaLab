<template>
  <div id="app">
     <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}" class="head-logo">
          <img src="./assets/Newbee_log.jpg" style="width:100px height:100px">

        </router-link>
         <HomePage class="regiter"></HomePage>
        
        <div class="head-nav">
          <!-- <router-link v-if="show" :to="{path: '/loginback'}">登录</router-link> -->
          <ul>
            <li>
               <el-button v-if='this.$store.state.loginstats' @click="getuser">用户界面</el-button>
               <el-button v-if='!this.$store.state.loginstats' @click="getlogin">登陆</el-button>
            </li>
            <li>
              <el-button v-if='this.$store.state.loginstats' @click="getloggin">退出</el-button>
            </li>
          </ul>
        </div>  
      </div>
    </div>
    <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <div class="app-foot">
         <p>© Newbee_骚力立</p>
    </div>
  </div>
</template>

<script>
import {fetchUser} from '@/api/user.js'
import HomePage from './views/HomePage/HomePage' 
export default {
  name: 'App',
  components:{
    HomePage
  },
  data () {
    return {
      showbutton:true,
      showimg:false,

    }
  },
  methods:{
    getlogin(){
      this.$router.push({path: '/loginback'})
    },
    getloggin(){
      this.$store.state.loginstats = !this.$store.state.loginstats
    },
    getuser(){
       this.$router.push({path: '/User'})
    }
            // this.$router.push({path:'/User'});
  },
  mounted(){
    
  }
}
</script>

<style >
#app {

  background-color: #2d3a4b;


  
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: rgb(250, 249, 249);
}
.app-head {
  background: #031046;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
  margin-top: 20px;
}
.regiter{
  width: 800px;
  float: left;
  margin-left: 50px;
}
.head-logo img {
  width: 50px;
}
.head-nav {
  float: left;
}
.head-nav ul {
  overflow: hidden;
  list-style: none;
}
.head-nav li {
  cursor: pointer;
  float: left;
  padding: 10px;
  height: 50px;
  line-height: 50px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #01061a;
  color: rgb(245, 241, 241);
  clear: both;

}
.container {
width: 1520px;
  /* background: url(./assets/images/tim.jpg); */
}

</style>
