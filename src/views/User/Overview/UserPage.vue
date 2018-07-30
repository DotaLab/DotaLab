<template>
  <div class="container">
    <div  class="top">
      <div class="top_left">
        <!-- 用户头像 -->
        <div class="contentDiv"> <img :src="avatarfull"/></div>
        <!-- 用户名称 -->
        <div class="username">
          <p>{{personaname}}</p>
          <ul>
            <button>刷新</button>
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
          <Echarts id="mainChart1" :options='options[0]' class="echarts" v-if="options_show" :style="{width: '100px', height: '100px'}"></Echarts>
        </div>
        <div class="item">
          <!-- 1,2胜率饼图-->
            <div id="mainChart2" :style="{width: '100px', height: '100px'}"></div>
        </div>
        <div class="item">
          <!-- 2,1胜率饼图-->
           <div id="mainChart3" :style="{width: '100px', height: '100px'}"></div>
        </div>
        <div class="item">
          <!-- 2,2胜率饼图-->
           <div id="mainChart4" :style="{width: '100px', height: '100px'}"></div>
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
        <echarts id="myChart" :options='options[1]' class="echarts" v-if="options_show" :style="{width: '1200px', height: '300px'}"></echarts>
      </div>

      <div class="middle_bottom">
      </div>

    </div>


    <div class="bottom">
      <div class="bottom_left">
        <div class="bottom_left_title">
          <!-- 左下20场比赛表格-->
        <table style="margin:100;">
          <tbody>
              <tr>
                        <th class="tb1">选用英雄</th>
                        <!-- <th class="tb1" colspan="2">选用英雄</th> -->
                        <th class="tb1">比赛结果</th>
                        <th class="tb3">比赛时长</th>
                        <th class="tb2">击杀</th>
                        <th class="tb2">死亡</th>
                        <th class="tb2">助攻</th>
              </tr>

              <tr v-for="(item,index) in recentMacth " :key="index">
                <td>{{item.hero_id}}</td>
                <td>{{item.radiant_win}}</td>
                <td>{{item.duration}}</td>
                <td>{{item.kills}}</td>
                <td>{{item.deaths}}</td>
                <td>{{item.assists}}</td>
              </tr>
          </tbody>
        </table>
        </div>
        <div class="match">
         
        </div>

      </div>


      <div class="bottom_right">
    <table style="margin:100;">
          <tbody>
         <tr>
                        <th class="tb1">玩家</th>
                        <th class="tb1">场次</th>
                        <th class="tb3">胜率</th>
         <tr v-for="(item,index) in peers " :key="index">
                <td>{{item.personaname}}</td>
                <td>{{item.with_games}}</td>
                <td>{{item.with_win}}</td>
              </tr>
       
          </tbody>
        </table>

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

export default {
  components:{
    Echarts,
  },
  data() {
    return {
      
      avatarfull:'',
      personaname:'',
      personaname:'',
      user:[],
      user_total:[],
      icon:[],
      star_show:1 ,
      recentMacth : [],
      peers:[],
      options:[],
      options_show:false,
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

    axios.all([
        fetchUser(user_id),
        fetchUserTotal(user_id),
        fetchUserRecent(user_id),
        fetchUserPeer(user_id)
      ]).then(response=>{
        this.$store.state.UserInfo = response[0].data;
        this.$store.state.UserTotal = response[1].data;
        this.$store.state.UserRecentMacth = response[2].data;
        this.$store.state.UserPeerser = response[3].data;

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
<style>
.tb1 {
  width: 190px;
  height: 10px;
  font-size: 12px;
}
.tb2 {
  width: 30px;
  height: 10px;
  font-size: 12px;
}
.tb3 {
  width: 60px;
  height: 10px;
  font-size: 12px;
}
.tb4 {
  width: 160px;
  height: 10px;
  font-size: 12px;
}
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
  color: #dcdddd;
}
ul li {
  list-style: none;
  float: left;
  text-align: center;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
/* 顶部 */
.top {
  width: 100%;
  height: 240px;
  margin: 10px;
  border: 1px dashed #dcdddd;
}
/* 顶部左边 */
.top_left {
  width: 350px;
  height: 180px;
  overflow: hidden;
  border: 1px dashed #dcdddd;
  float: left;
  padding: 5px;
  margin: 5px;
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
  width: 300px;
  height: 180px;
  /* border:  1px dashed #dcdddd; */
  float: left;
  padding: 5px;
  margin: 5px;
}
.top_middle_2 .item {
  float: left;
  width: 145px;
  position: relative;
  margin: 5px 2px;
}
/* .top_middle_2 .item img{
  width: 80px;
  height: 80px;
  float: left;
  
} */
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
  height: 300px;
  margin: 10px;
  border: 1px dashed #dcdddd;
}
.middle_top {
  height: 35%;
  width: 95%;
  padding-left: 50px;
  padding-top: 15px;
}
.middle_bottom {
  margin: 10px auto;
  height: 50%;
  width: 95%;
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
}
.bottom_left {
  border: 1px dashed #dcdddd;
  margin: 18px;
  width: 55%;
  height: 90%;
  float: left;
}
.bottom_left .bottom_left_title {
  line-height: 40px;
  background: #2a2c3b;
  height: 40px;
}
.bottom_right {
  border: 1px dashed #dcdddd;
  width: 35%;
  float: right;
  height: 90%;
  padding: 10px;
  margin: 20px;
}
</style>

