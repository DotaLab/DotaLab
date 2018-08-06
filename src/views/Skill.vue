<template>
<div class="nav">
  <div class="hero">
    <!--  英雄头像 -->
    <div class="hero_pic">  
        <img :src="hero_img" width="256" height="144px" >  
    </div>
    <!-- 英雄名称 -->
    <div class="hero_name">
        <p>{{ hero_title }}</p>
    </div>
    <!-- 英雄技能图片 /  【ability_info】技能信息 -->
    <div class="hero_abilities">
      <div  v-for="(abi , index ) in ability_info" :key="index" >
        <div class="pic" @mouseover="imagshow(index)" @mouseout="imagnotshow(index)">
          <img :src="abi.img" :title="abi.abilities" width="64px" height="64px" >
        </div>  
      </div>
    </div>
    <!-- 英雄技能信息描述    -->
    <div class="hero_abilities_info">
      <div  v-for="(abi , index ) in ability_info" :key="index" v-if="(index==cur_index)">
       <!-- <transition name="slide-fade"> -->
         <!-- 英雄技能信息描述    -->
         <div  class="info ">
           <h2>{{ abi.dname }}</h2>
           <p>{{ abi.desc }}</p>
           <ul>
              <li v-if="abi.mc" class="text-info">魔法消耗: {{format(abi.mc)}}</li>
              <li v-if="abi.cd" class="text-warning">冷却时间: {{format(abi.cd)}}</li>
              <li v-if="abi.behavior">技能特性: {{format(abi.behavior)}}</li>
              <li v-if="abi.dmg_type">伤害类型: {{abi.dmg_type}}</li>
              <li v-if="abi.bkbpierce">无视魔免: {{abi.bkbpierce}}</li>
           </ul>
            <ul>
              <li class="ability-stats" v-for="attr in abi.attrib" :key="attr.key">
                {{attr.header}} {{format(attr.value)}}
              </li>
            </ul>
      </div>
      <!-- </transition> -->
    </div>
  </div>
  <div class="rate">
    
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    
    active-text-color="#ffd04b">
    <el-menu-item index="1" >排名</el-menu-item>
    <el-menu-item index="2" >匹配</el-menu-item>
    <el-menu-item index="3" >时长</el-menu-item>
    <el-menu-item index="4" ><a :href='"https://www.opendota.com/heroes/"+ cur_hero +"/benchmarks"'>评估</a></el-menu-item>
    <el-menu-item index="5"  disabled>近期</el-menu-item>
    </el-menu>
    <div>
       <router-view></router-view>
    <div>

  </div>
    </div>
  </div>
  </div>
  
</div>
</template>
  

<script>
import axios from 'axios'

export default {
  name: 'AbilityStats',
  data () {
    return {
      'ready': false,
      'ability': [],
      'ability_info':[],
      'cur_index':-1,
      'hero_img': [],
      'hero_title' : [],
       cur_hero : null,
    }
  },

  created: function () {
    this.cur_hero = this.$route.params.key
    this.$store.state.cur_hero = this.$route.params.key
    const vm = this
    let web = [
      axios.get('/static/data/draftpool.json').then((reponse) => { return reponse.data }),
      axios.get('/static/data/abilities.json').then((reponse) => { return reponse.data }),
    ]
    // alert('xxx')
    Promise.all(web).then((values) => {
      const heroDB = values[0]     
      const abilitiesDB = values[1]
      let abilityKey = vm.$route.params.key   
      // alert(abilityKey)
      let key = parseInt(abilityKey)    
    //  alert(pic)
      for(var i = 0 ; i< heroDB.length ; i++)
      {        
          if(key == heroDB[i].id)
          {
             this.hero_img = heroDB[i].img;
             this.hero_title = heroDB[i].name;
          
            this.ability = heroDB[i].abilities
            var temp = this.ability.length
            for( var j = 0 ; j < temp ; j++)
           {
                let key2 = parseInt(this.ability[j].id)
                this.ability_info.push(abilitiesDB[key2])
           }
          }        
      }
      vm.ready = true
    }).catch(function () {
      vm.$router.push('/error')
    })
  },
  methods: {
    format: function (stat) {
      if (Array.isArray(stat)) {
        return stat.join(' / ')
      } else {
        return stat
      }
    },
    imagshow: function (index){
        this.cur_index = index
    //    this.show =!this.show
    },
    imagnotshow: function (index) {   
        this.cur_index = -1
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    handleSelect(key, keyPath) {
        if(key==1){
          this.$router.push({path:'/heroRank'});
        }else if(key==2){
          this.$router.push({path:'/heroHB'});
        }else if(key==3){
          this.$router.push({path:'/heroTime'});
        }
      }
  }
}
</script>
<style scoped>
ul{list-style: none;}
body{background: #090136;}
.nav{
   width: 1200px;
  margin: 10px auto;
}
.hero{
  width: 100%;
}
.nav .hero_pic{
    margin-top: 30px;
    float: left;
    margin-left: 130px;
}
.nav .hero_name{
    float: left;
     font-size: 30px;
      margin-left: 150px;
      margin-top: 10px;
}
.nav .hero_abilities{
  margin-left: 100px;
  float: left;
  height: 70px;
  width: 600px;

}
  li{
    
  }
.clearfloat{clear:both;height:0;font-size: 1px;line-height: 0px;} 
.nav .hero_abilities .pic{
  float: left;
  margin: 5px;
}
.nav .hero_abilities .pic:hover{
 border: 2px groove
}
.nav .hero_abilities_info .info{
    position: relative;
    margin-left: 150px;
    text-align: center;
    width: 800px;
    float: left;
}
.nav .rate{
   width: 1200px;
   float: left;
   height: 800px;
   text-align: center;
   margin: 20px
}
.clearfix {
  overflow: auto;
}
</style>