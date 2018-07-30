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
            <button >刷新</button>
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
            <h3>{{user_total.win}}</h3>
            Win
        </div>
        <div class="total_lose">
           <h3>{{user_total.lose}}</h3>
           Lose
        </div>
      </div>
      <div class="top_middle_2" >
        <div class="item">
          <!-- 1,1胜率饼图-->
          <div id="mainChart1" :style="{width: '100px', height: '100px'}"></div>
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
        <img :src='rank_icon' style="position:absolute; top:20px; right:10px; z-index:1;" width="160px" height="160">
        <img v-if="star_show" :src='star_icon' style="position:absolute; top:20px; right:10px; z-index:2;" width="160px" height="160">
        <span style="position:absolute; top:145px; right:75px ;z-index:2;color:white">{{user.leaderboard_rank}}</span>
      </div>
    </div>

    <div class="middle">

      <div class="middle_top"> 
        <!-- 折线大图表 -->
        <div id="myChart" :style="{width: '1200px', height: '300px'}"></div>
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
export default {
  data() {
    return {
      personaname:'',
      avatarfull:'',
      user:[],
      user_total:[],
      user_id:'',
      rank_icon:'',
      star_icon:'',
      star_show:1 ,
      recentMacth : [],
      peers:[]
    };
  },
  created() {
    console.log("Created被调用");
  },
  watch: {
  },
  // activated: function() {
  //     console.log("activated被调用");
  //   },
  mounted() {
    var start = new Date();
    var kills =new Array();
    var deaths =new Array();
    var assists =new Array();
    var end = null;
    var time = null;
    console.log("mounted执行")
    // this.user_id = this.$route.query.name;
    this.user_id = this.$store.state.UserId;
    var baseURL = "https://api.opendota.com/api";
    var userURL = baseURL + "/players/" +  this.user_id;
    var totalURL = userURL + '/wl';
    var recentURL = userURL +  '/recentMatches';
    var peerURL = userURL +  '/peers';
    console.log("开始异步获取数据" + start);
    axios.all([
      axios.get(userURL),
      axios.get(totalURL),
      axios.get(recentURL),
      axios.get(peerURL),
    ])
    .then(response =>{
        end  = new Date();
        time = end -start;
        console.log("异步获取数据花费" + time);
        
      // 上面两个请求都完成后，才执行这个回调方法
        this.user = response[0].data;
        this.user_total = response[1].data;
        this.recentMacth = response[2].data;
        this.peers = response[3].data;
        this.avatarfull = response[0].data.profile.avatarfull
        this.personaname = response[0].data.profile.personaname
      
        for (var i=0;i<20;i++)
        {
          kills.push(this.recentMacth[i].kills);
          assists.push(this.recentMacth[i].assists);
          deaths.push(this.recentMacth[i].deaths);
        }
        start = new Date();
        this.geticon(); 
        this.drawPie();
        this.drawLine(kills,assists,deaths);
        end = new Date();
        time = end - start;
        console.log("页面绘制花费" + time);
    });
  },
  beforeDestroy () {
      console.log("beforeDestroy已经被调用")
      //组件销毁前先销毁 ECharts 实例
      if (!this.myChart) { return }
      this.myChart.dispose()
      this.myChart = null
    },
  methods: {
    drawLine(kills,assists,deaths){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        console.log(deaths)
        myChart.setOption({
            tooltip: {
              trigger: 'axis',
            },
            legend: {},
            xAxis: {type: 'category',value:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
            yAxis: {type: 'value'},
            series: [
              {
                name:'击杀数',
                type:'line',
                stack: '总量',
                data:kills
              },
              {  
                name:'助攻数',
                type:'line',
                stack: '总量',
                data: assists
              },
              {
              name:'死亡数',
              type:'line',
              stack: '总量',
              data:deaths
            },
           ]
       });
    },
    drawKDA() {
      let KDAchart = this.$echarts.init(document.getElementById("KDAchart"));

      KDAchart.setOption({
        grid: {
          bottom: "80%",
          containLabel: true
        },
        xAxis: {
          show: false,
          type: "value",
          maxInterval: 1
        },
        yAxis: {
          show: false,
          type: "category",
          data: [""]
        },
        series: [
          {
            name: "K",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                position: "insideLeft"
              }
            },
            data: [3]
          },
          {
            name: "D",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                position: "insideLeft"
              }
            },
            data: [2]
          },
          {
            name: "A",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                position: "insideLeft"
              }
            },
            data: [1]
          }
        ]
      });
    },
    rankTierToString(rankTier) {
    },
    geticon() {
      var base = '../../static/rank-icon/';
      var iconURL = '';
      var starURL = '';
      var rank = 0;
      var intRankTier = 0;
      if(this.user.rank_tier != parseInt(this.user.rank_tier, 10)) {
         iconURL = base + 'rank_icon_0.png';
         
      }else{
           intRankTier = parseInt(this.user.rank_tier, 10);
            iconURL = base + 'rank_icon_' + parseInt(intRankTier / 10, 10) + '.png';
            starURL = base + 'rank_star_' + parseInt(intRankTier % 10, 10) + '.png';
            if(parseInt(intRankTier % 10, 10) == 0){
               starURL = '';
               this.star_show = 0
            }
      }
     this.rank_icon = iconURL;
     this.star_icon = starURL;
    },
    drawPie(){
      var begin=new Date();
      console.log("Echars绘制pie开始：" + begin);
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("mainChart1"))
      myChart.setOption({
        graphic: {
          type: "text", // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
          top: "center", // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
          left: "center", // 同上
          style: {
            text: "夜魇胜率", // 文本块文字。可以使用 \n 来换行。[ default: '' ]
            fill: "#fff", // 填充色。
            fontSize: 12 // 字体大小
            // fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
          }
        },

        series: [
          {
            type: "pie",
            radius: ["60%", "75%"],
            hoverAnimation: false, //悬停的动画效果
            clockWise: true,
            startAngle: 180,
            avoidLabelOverlap: false,
            label: {
              normal: {
                text: "胜率",
                show: false,
                position: "outside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12"
                  // fontWeight: 'bold' 是加粗
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [{ value: this.user_total.win, name: "胜率1" }, { value: this.user_total.lose, name: "胜率2" }]
          }
        ]
      });
      var end=new Date();
      var time=end-begin;
      console.log("Echars绘制pie执行了" + time);
  // let mainChart2 = this.$echarts.init(
      //   document.getElementById("mainChart2")
      // ); /*1,2的饼图*/
      // mainChart2.setOption({
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: ["60%", "75%"],
      //       hoverAnimation: false,
      //       clockWise: true,
      //       startAngle: 180,
      //       avoidLabelOverlap: false,
      //       label: {
      //         normal: {
      //           show: false,
      //           position: "center"
      //         },
      //         emphasis: {
      //           show: true,
      //           textStyle: {
      //             fontSize: "12"
      //             // fontWeight: 'bold' 是加粗
      //           }
      //         }
      //       },
      //       labelLine: {
      //         normal: {
      //           show: false
      //         }
      //       },
      //        data: [{ value: this.user_total.win, name: "胜率1" }, { value: this.user_total.lose, name: "胜率2" }]
      //     }
      //   ]
      // });
      // let mainChart3 = this.$echarts.init(
      //   document.getElementById("mainChart3")
      // ); /*2,1的饼图*/
      // mainChart3.setOption({
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: ["60%", "75%"],
      //       clockWise: true,
      //       startAngle: 180,
      //       hoverAnimation: false,
      //       avoidLabelOverlap: false,
      //       label: {
      //         normal: {
      //           show: false,
      //           position: "center"
      //         },
      //         emphasis: {
      //           show: true,
      //           textStyle: {
      //             fontSize: "12"
      //             // fontWeight: 'bold' 是加粗
      //           }
      //         }
      //       },
      //       labelLine: {
      //         normal: {
      //           show: false
      //         }
      //       },
      //       data: [{ value: this.user_total.win, name: "胜率1" }, { value: this.user_total.lose, name: "胜率2" }]
      //     }
      //   ]
      // });
      // let mainChart4 = this.$echarts.init(
      //   document.getElementById("mainChart4")
      // ); /*2,2的饼图*/
      // mainChart4.setOption({
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: ["60%", "75%"],
      //       clockWise: true,
      //       startAngle: 180,
      //       hoverAnimation: false,
      //       avoidLabelOverlap: false,
      //       label: {
      //         normal: {
      //           show: false,
      //           position: "center"
      //         },
      //         emphasis: {
      //           show: true,
      //           textStyle: {
      //             fontSize: "12"
      //             // fontWeight: 'bold' 是加粗
      //           }
      //         }
      //       },
      //       labelLine: {
      //         normal: {
      //           show: false
      //         }
      //       },
      //        data: [{ value: this.user_total.win, name: "胜率1" }, { value: this.user_total.lose, name: "胜率2" }]
      //     }
      //   ]
      // });

    }
  },
  computed:{
    user_totalmatch:{
      get:function(){
          var temp = this.user_total.win+this.user_total.lose;
          return temp;
        },
        set:function(newvalue){
          this.total_rate = newvalue;
        }
    },
    user_totalrate:{
      get:function(){
          var temp = this.user_total.win/(this.user_totalmatch) * 100;
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

