<template>
  <div class="con">
    <div class="tanke">
      <h1> 战士 </h1>
     <div  class="hero_total" v-for="(hero , index) in items" :key="index"   v-if="hero.primary === 3">
      <div class="box" >
        <router-link :to="'/Skill/' + index ">
          <div class="pic"><img :src="hero.img" :title="hero.name" ></div>
          <div class="name"> {{hero.name}} </div>
        </router-link>
      </div> 
     </div>
     <!-- 清除浮动 -->
        <div class="clearfloat">
        </div>
    </div>
    <div class="fashi">
       <h1> 射手 </h1>
    <div  class="hero_total" v-for="(hero , index) in items" :key="index"  to=""  v-if="hero.primary === 4" >
      <div class="box" >
      <router-link :to="'/Skill/' + index ">
        <div class="pic"><img :src="hero.img" :title="hero.name" ></div>
        <div class="name"> {{hero.name}} </div>
      </router-link>
     </div> 
    </div>
         <!-- 清除浮动 -->
        <div class="clearfloat">
        </div>
    </div>

  <div class="sheshou">
     <h1> 法师 </h1>
  <div  class="hero_total" v-for="(hero , index) in items" :key="index"  v-if="hero.primary === 5">
    <div class="box" >
      <router-link :to="'/Skill/' + index ">
      <div class="pic"><img :src="hero.img" :title="hero.name" ></div>
      <div class="name"> {{hero.name}} </div>
      </router-link>
    </div> 
  </div>
   <!-- 清除浮动 -->
        <div class="clearfloat">
        </div>
  </div>
</div>


</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DraftPool',
  data () {
    return {
      'ready': false,
      'filter': null,
      'items': []
    }
  },
  created () {
    const vm = this
    let p1 = axios.get('/static/data/heroes.json').then((reponse) => { return reponse.data })
    Promise.all([p1]).then((values) => {
      const pool = values[0]
      vm.items = pool
      vm.ready = true
    }).catch(function () {
      vm.$router.push('/error')
    })
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{text-align: center}
.con{ width: 1215px; margin: 0 auto;}
.tanke{border: 2px groove;margin: 5px;}
.fashi{ border: 2px groove; margin: 5px;}
.sheshou{border: 2px groove;margin: 5px;}
.box{ width: 140px;float: left;margin: 5px;}
.hero_total{}
.clearfloat{clear:both;height:0;font-size: 1px;line-height: 0px;}  
.name{text-align:center; color: #FFF;}
</style>