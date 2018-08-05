<template>
  <div class="vessel">
    <div  class="top">
      <div class="top_left">
        <!-- 用户头像 -->
        <div class="contentDiv"> <img :src="avatarfull"/></div>
        <!-- 用户名称 -->
        <div class="username">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{personaname}}</p>
          <ul>
            <button ><router-link to='/test_ue'>刷新</router-link></button>
            <button>过滤</button>
          </ul>
        </div>
      </div>
      <div class="top_middle_1">
        <div class="item1">
          <div class="total_match">
            <h1>{{user_totalmatch}}</h1>
            总游戏局数
          </div>
          <div class="total_rate">
            <h1>{{user_totalrate}}</h1>
            胜率
          </div>
        </div>
        <div class="total_win">
            <h3>{{this.$store.state.UserTotal.win}}</h3>
            Win
        </div>
        <div class="total_lose">
           <h3>{{this.$store.state.UserTotal.lose}}</h3>
           Lose
        </div>
      </div>
      <div class="top_middle_2" >
        <div class="item">
           <!-- 1,1胜率饼图-->
          <Echarts id="mainChart1" :options='options[0]' class="echarts" v-if="options_show" :style="{width: '100px', height: '80px'}"></Echarts>
        </div>
        <div class="item">
          <!-- 1,2胜率饼图-->
             <Echarts id="mainChart2" :options='options[0]' class="echarts" v-if="options_show" :style="{width: '150px', height: '80px'}"></Echarts>
        </div>
                <div class="item">
          <!-- 1,2胜率饼图-->
             <Echarts id="mainChart3" :options='options[0]' class="echarts" v-if="options_show" :style="{width: '100px', height: '80px'}"></Echarts>
        </div>
                <div class="item">
          <!-- 1,2胜率饼图-->
             <Echarts id="mainChart4" :options='options[0]' class="echarts" v-if="options_show" :style="{width: '150px', height: '80px'}"></Echarts>
        </div>
      </div>
      <div class="top_right">
        <!-- 段位logo -->
        <img :src='icon[0]' style="position:absolute; top:20px; right:10px; z-index:1;" width="160px" height="160">
        <img v-if="icon[2]" :src='icon[1]' style="position:absolute; top:20px; right:10px; z-index:2;" width="160px" height="160">
        <span style="position:absolute; top:145px; right:75px ;z-index:2;color:white">{{this.$store.state.UserInfo.leaderboard_rank}}</span>
      </div>
    </div>

    <div class="middle">

      <div class="middle_top"> 
        <!-- 折线大图表 -->
        <!-- <div id="myChart" :style="{width: '1200px', height: '300px'}"></div> -->
        <echarts id="myChart" :options='options[1]' class="echarts" v-if="options_show" :style="{width: '1200px', height: '300px',position:'absolute',left:'170px',top:'313px'}"></echarts>
      </div>

      <div class="middle_bottom">
         <Navigation :navi='MatchDate' ></Navigation>
         <keep-alive>
          <router-view></router-view>
         </keep-alive>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { fetchUser } from '@/api/user'
import { fetchUserTotal } from '@/api/user'
import { fetchUserRecent } from '@/api/user'
import { fetchUserPeer } from '@/api/user'
import { geticon } from '@/utils/draw'
import { pieoDraw } from '@/utils/draw'
import { drawLine } from '@/utils/draw'
import Echarts from '@/components/Echarts'
import Navigation from '@/components/Navigation'
import buttoncontent from '@/components/UserMatchbutton'
import RankTable from '@/components/Table/RankTable'

import {fetchMatcheinfo} from '@/api/match.js'
import {fetchHeroStats} from '@/api/hero.js'

export default {
  components:{
    Echarts,
    Navigation,
    buttoncontent,
    RankTable,
  },
  data() {
    return {
      
      avatarfull:'',
      personaname:'',
      user:[],
      user_total:[],
      icon:[],
      star_show:1 ,
      recentMacth : [],
      peers:[],
      options:[],
      options_show:false,
      MatchDate: [
        {
          name: '历史战绩',
          path: 'overmatches',
          active: false
        },
        {
          name: '天梯记录',
          path: 'ranktable',
          active: false
        },
        {
          name: '使用英雄',
          path: 'analysis',
          active: false
        },
        {
          name: '英雄排名',
          path: 'userHero',
          active: false
        }
        ],
    };
  },
  created() {
    console.log("Created被调用");   
  },
  watch: {
    options:function(val,oldval){
      console.log("watch")
      if(this.options.length == 2){
        this.options_show = true;
      }else{
        this.options_show = false;
      }
    }
      
  },
  mounted() {
    var kda = new Array(3);
    for(var i=0;i<3;i++)
      kda[i] = new Array(3);
    var user_id = this.$store.state.UserId;
    var match_id = 4036496606
    axios.all([

        fetchUser(user_id),
        fetchUserTotal(user_id),
        fetchUserRecent(user_id),
        fetchUserPeer(user_id),
        fetchMatcheinfo(match_id),
        fetchHeroStats()
      ]).then(response=>{
        this.$store.state.UserInfo = response[0].data;
        this.$store.state.UserTotal = response[1].data;
        this.$store.state.UserRecentMacth = response[2].data;
        this.$store.state.UserPeerser = response[3].data;
        this.$store.state.MatchInfo = response[4].data;
        this.$store.state.HeroInfo = response[5].data;


        for (var i=0;i<20;i++){
          kda[0].push(this.$store.state.UserRecentMacth[i].kills);
          kda[1].push(this.$store.state.UserRecentMacth[i].deaths);
          kda[2].push(this.$store.state.UserRecentMacth[i].assists);
        }
        //获取的KDA有三个空元素先删去
        for(var i=0;i<3;i++){
          kda[i].splice(0,3);
        }
        this.avatarfull = this.$store.state.UserInfo.profile.avatarfull;
        this.personaname = this.$store.state.UserInfo.profile.personaname;
        this.icon = geticon(this.$store.state.UserInfo.rank_tier);
        var piedata  = new Array();
        piedata.push(response[1].data.win);
        piedata.push(response[1].data.lose);
        this.options.push(pieoDraw(piedata));
        this.options.push(drawLine(kda));
        //drawLine("myChart",kills,assists,deaths);
      })
  },
  beforeDestroy () {
      console.log("beforeDestroy已经被调用")
      //组件销毁前先销毁 ECharts 实例
      if (!this.myChart) { return }
      this.myChart.dispose()
      this.myChart = null
    },
  methods: {
  },
  computed:{
    user_totalmatch:{
      get:function(){
          var temp = this.$store.state.UserTotal.win + 
                    this.$store.state.UserTotal.lose;
          return temp;
        },
        set:function(newvalue){
          this.total_rate = newvalue;
        }
    },
    user_totalrate:{
      get:function(){
          var temp = this.$store.state.UserTotal.win /
                                 (this.user_totalmatch) * 100;
          temp =  temp.toFixed(1)
          return temp;
        },
        set:function(newvalue){
          this.total_rate = newvalue;
        }
    } 
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.contentDiv {
  display: inline-block;
  margin: 5px auto;
  width: 165px;
  height: 165px;
  border-radius: 165px;
  -webkit-border-radius: 165px;
  -moz-border-radius: 165px;
  border: 2px solid #fff;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
} /*圆圆头像*/

.contentDiv img {
  width: 100%;
  min-height: 100%;
}

#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
}
#customers td,
#customers th {
  font-size: 1em;
  border: 1px solid #98bf21;
  padding: 3px 7px 2px 7px;
}
#customers th {
  font-size: 1.1em;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #a7c942;
  color: #ffffff;
}
#customers tr.alt td {
  color: #000000;
  background-color: #eaf2d3;
}

/*以下为布局设置*/
table110 {
  background-color: #3c4653;
}
body {
  background-color: #000000;
  margin: 0;
  padding: 0;
  color: #ffffff;
}
ul li {
  list-style: none;
  float: left;
  text-align: center;
}
.vessel {
  width: 1200px;
  margin: 0 auto;
}
/* 顶部 */
.top {
  width: 100%;
  height: 200px;
  margin: 10px;
  border: 1px dashed #dcdddd;
}
/* 顶部左边 */
.top_left {

  height: 180px;
  overflow: hidden;
  border: 1px dashed #dcdddd;
  float: left;
  padding: 5px;
  margin: 5px ;
 
  
}
.top_left .pic {
  width: 180px;
  height: 180px;
  overflow: hidden;
  float: left;
}
.top_left .username {
  float: right;
  padding-right: 20px;
  padding-top: 50px;
}
/* 顶部中间 */
.top_middle_1 {
  width: 300px;
  height: 180px;
  /* border:  1px dashed #dcdddd; */
  float: left;
  padding: 5px;
  margin: 5px;
}
.top_middle_1 .item1 {
  background-color: #2a2c3b;
  width: 280px;
  height: 100px;
  margin: 5px auto;
}
.top_middle_1 .item1 .total_match {
  float: left;
  margin-left: 30px;
  color: #dcdddd;
  text-align: center;
  line-height: 20px;
}
.top_middle_1 .item1 .total_rate {
  float: right;
  margin-right: 30px;
  color: #dcdddd;
  text-align: center;
  line-height: 20px;
}
.top_middle_1 .total_win {
  background-color: #2a2c3b;
  width: 130px;
  height: 60px;
  margin: 1px 10px;
  float: left;
  text-align: center;
  line-height: 8px;
  color: #dcdddd;
}
.top_middle_1 .total_lose {
  background-color: #2a2c3b;
  width: 130px;
  height: 60px;
  margin: 1px 10px;
  float: left;
  text-align: center;
  line-height: 8px;
  color: #dcdddd;
}
.top_middle_2 {
  width: 200px;
  height: 180px;
  /* border:  1px dashed #dcdddd; */
  float: left;
  padding: 5px;
  margin: 5px;
}

.top_middle_2 .item{
  width: 100px;
  height: 100px;
  float: left;
}
.top_middle_2 .item .item-text {
  float: right;
  top: 30px;
  left: 83px;
  position: absolute;
  font-size: 15px;
  color: #dcdddd;
}
/* 顶部右边 */
.top_right {
  width: 160px;
  height: 180px;
  position: relative;
  float: right;
  padding: 5px;
  margin: 5px;
  background-color: #000000;
}

/* 中间 */
.middle {
  width: 100%;
  height: 380px;
  margin: 10px;
  border: 1px dashed #dcdddd;
}
.middle_top {
  height: 75%;
  width: 95%;
  padding-top: 15px;
}
.middle_bottom{
  height: 20%;
  border:  1px dashed #dcdddd;
}
.middle_bottom img {
  float: left;
  width: 260px;
  margin: 10px;
}
/* 底部 */
.bottom {
  width: 100%;
  height: 600px;
  margin: 10px;
  border: 1px dashed #dcdddd;
  background-color: #000000
}
.bottom_left {
  /* border: 1px dashed #000000; */
  margin: 18px;
  width: 62%;
  height: 90%;
  float: left;

}
.bottom_left .bottom_left_title {
  line-height: 40px;
  background: #2a2c3b;
  height: 40px;
}
.bottom_right {
  /* border: 1px dashed #dcdddd; */
  width: 28%;
  float: right;
  height: 90%;
  padding: 10px;
  margin: 20px;

}
.el-table th{
        background:#060713; /*表头颜色*/
        font-size: 12px;

        text-align: center
    }
.el-table td{
        background:#141414; /*颜色*/
        font-size: 12px;
        height:5px;
        text-align: center
    }
</style>

