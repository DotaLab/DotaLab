<template>
<div class="con">
    <!-- 所有英雄在不同的段位下的选择情况 -->
  <!-- 散点图 -->
  <div style="1100px; height: 350px">
    <echarts id='Scatter' :options='options[0]' class="echarts" v-if="show" style="height:100%;"></echarts>
  </div>
  <div>&nbsp;</div><div>&nbsp;</div>
  <el-collapse  @change="handleChange" >
    <el-collapse-item title="力量英雄" name="1">
      <div class="tanke">
        <h1> 力量 </h1>
        <div  class="hero_total" v-for="(hero , index) in items" :key="index"   v-if="hero.primary_attr === 'str'">
          <div class="box" >
            <div class="name"> {{hero.localized_name}} </div>
            <router-link :to="'/Skill/' + hero.hero_id ">
              <div class="pic"><img :src="'https://api.opendota.com'+hero.img" :title="hero.localized_name" height="63" width="112"></div>
            </router-link>
          </div> 
      </div>
      <!-- 清除浮动 -->
      <div class="clearfloat">
          </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="敏捷英雄" name="2">
      <div class="fashi">
        <h1> 敏捷 </h1>
        <div  class="hero_total" v-for="(hero , index) in items" :key="index"  to=""  v-if="hero.primary_attr === 'agi'" >
        <div class="box" >
          <div class="name"> {{hero.localized_name}} </div>
        <router-link :to="'/Skill/' + hero.hero_id ">
          <div class="pic" ><img :src="'https://api.opendota.com'+hero.img" :title="hero.localized_name" height="63" width="112"></div>
        </router-link>
      </div> 
      </div>
          <!-- 清除浮动 -->
      <div class="clearfloat"></div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="智力英雄" name="3">
    <div class="sheshou">
      <h1> 智力 </h1>
      <div  class="hero_total" v-for="(hero , index) in items" :key="index"  v-if="hero.primary_attr === 'int'">
        <div class="box" >
          <div class="name"> {{hero.localized_name}} </div>
          <router-link :to="'/Skill/' + hero.hero_id ">
            <div class="pic"><img :src="'https://api.opendota.com'+hero.img" :title="hero.localized_name" height="63" width="112"></div>
          </router-link>
        </div> 
      </div>
      <div class="clearfloat">
          </div>
      </div>
    </el-collapse-item>
  </el-collapse>
  <div>&nbsp;</div><div>&nbsp;</div>
  <div>&nbsp;</div><div>&nbsp;</div>


</div>

</template>

<script>
import axios from 'axios'
import {fetchHeroBase} from '@/api/hero.js'
import {fetchHeroMatch} from '@/api/hero.js'
import {fetchHeroDurations} from '@/api/hero.js'
import {fetchHeroStats} from '@/api/hero.js'
import {drawScatter} from '@/utils/draw.js'

import echarts from '@/components/Echarts'
export default {
  name: 'DraftPool',
  components:{
    echarts,
  },
  data () {
    return {
      'ready': false,
      'filter': null,
      'items': [],
      'teamrank':['先锋','卫士','中军','统帅','传奇','万古流芳','超凡入圣','不朽'],
      'options':[],
      show:false
    }
  },
  created () {

    // const vm = this
    // let p1 = axios.get('/static/data/heroes.json').then((reponse) => { return reponse.data })
    // Promise.all([p1]).then((values) => {
    //   const pool = values[0]
    //   vm.items = pool
    //   vm.ready = true
    // }).catch(function () {
    //   vm.$router.push('/error')
    // })    
    fetchHeroStats().then(response=>{
          this.$store.state.HeroInfo = response.data;
          this.items = this.$store.state.HeroInfo;
          var dataAll = new Array(4);
          for (let index = 0; index < dataAll.length; index++) {
            dataAll[index] = new Array(115);
            for (let i = 0; i < dataAll[index].length; i++) {
              dataAll[index][i] = new Array(2);
            }
          }
          for (let index = 1; index <= 4; index++) {
            var ad1 = index + '_pick'
            var ad2 = index + '_win'
            var win_total = 0;
            var pick_total = 0;
            for (let i = 0; i < response.data.length; i++) {
              win_total += response.data[i][ad2]
              pick_total += response.data[i][ad1]
            }
            for (let i = 0; i < response.data.length; i++) {
              dataAll[index-1][i][1] = ((response.data[i][ad2]/win_total).toFixed(4))
              dataAll[index-1][i][0] = ((response.data[i][ad1]/pick_total).toFixed(4))
            }
          }
          
          this.options.push(drawScatter(dataAll));
          this.show = true;
          this.$store.state.flag1 = true
      })

  },
  methods:{
    handleChange(val) {
        console.log(val);
      }

    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{text-align: center}
.con{ width: 1215px; margin: 0 auto;color: #000;}
.tanke{border: 2px groove;margin: 5px;color: #000;}
.fashi{ border: 2px groove; margin: 5px;color: #000;}
.sheshou{border: 2px groove;margin: 5px;color: #000;}
.box{ width: 140px;float: left;margin: 5px;}
.clearfloat{clear:both;height:0;font-size: 1px;line-height: 0px;}  
.name{text-align:center; color: rgb(0, 0, 0);}
</style>