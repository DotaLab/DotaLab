<template>
<div>
  <!-- todo 分页功能 -->
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="size">
    </el-pagination>
  </div>
    <el-table
    @row-click="openDetails"
    :data="cur_tableData" 
    highlight-current-row
    style="width: 100%;padding=0px">
    <el-table-column
      prop="Img"
      label="使用英雄"
      width="130" 
      >
      <template slot-scope="scope">
          <div class="hero" style="float:left">
        <div class="pic"><img :src='scope.row.Img' style="width:40px;height:30px"></div>
        <div style="height:30px">{{scope.row.Heroname}}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="Result"
      :filters="[{ text: '胜利', value: '胜利' }, { text: '败北', value: '败北' }]"
      :filter-method="filterWin"
      label="比赛结果"
      width="80">
    </el-table-column>
    <el-table-column
      prop="Time"
      sortable
      label="比赛时长"
      width="100"
      >
    </el-table-column>
     <el-table-column
      prop="kills"
      label="击杀数"
      sortable
      >
    </el-table-column>
     <el-table-column
      prop="deaths"
      label="阵亡数"
      sortable
      >
    </el-table-column>
     <el-table-column
      prop="assists"
      label="助攻数"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="tag"
      label="KDA"
      width="115">
      <template slot-scope="scope">
       <div>
           <p> {{ scope.row.KDA }}</p>
            <div style="float:left; height:2px; background-color: rgb(102, 187, 106);" :style="'width:' + scope.row.K * 100 +'%;'"> &nbsp; </div>
            <div style="float:left; height:2px; background-color: rgb(255, 76, 76);" :style="'width:' + scope.row.D * 100  +'%;'">  &nbsp;</div>
            <div style="float:left; height:2px; background-color: rgb(124, 153, 168);" :style="'width:' + scope.row.A * 100  +'%;'"> &nbsp; </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</div>

</template>

<script>
import {fetchMatcheinfo} from '@/api/match'
import {fetchRankMatches} from '@/api/user.js'
import {formatSeconds} from '@/utils/tool.js'
  export default {
    created(){
        var userid = this.$store.state.UserId
        fetchRankMatches(userid).then(response=>{
          this.tableData = response.data
          this.size = this.tableData.length
          for(var i=0;i<this.tableData.length;i++){
            var xtotal = this.tableData[i].kills +this.tableData[i].deaths +this.tableData[i].assists
            
            this.tableData[i].K = this.tableData[i].kills/xtotal; 
            this.tableData[i].D = this.tableData[i].deaths/xtotal;
            this.tableData[i].A= this.tableData[i].assists/xtotal;
            if((this.tableData[i].player_slot < 129 && this.tableData[i].radiant_win == true) ||
            (this.tableData[i].player_slot > 128 && this.tableData[i].radiant_win == false) ){
                this.tableData[i].Result = "胜利";
            }else{
                this.tableData[i].Result = "败北";
            }
            this.tableData[i].Time = formatSeconds(this.tableData[i].duration)
            if(this.tableData[i].deaths == 0 ){
                this.tableData[i].KDA = (this.tableData[i].kills + this.tableData[i].assists) / 1
            }else{
                this.tableData[i].KDA = ((this.tableData[i].kills + this.tableData[i].assists) / this.tableData[i].deaths).toFixed(2)
            }
        }
        this.cur_tableData  = this.tableData.slice(0,5);
        for(var i=0;i<this.tableData.length;i++){
            this.tableData[i].Img = this.$store.state.HeroImg[this.tableData[i].hero_id].img;
            this.tableData[i].Heroname = this.$store.state.HeroImg[this.tableData[i].hero_id].name;
        }
        this.heroData = this.$store.state.HeroImg;
        
        })
    },
    data () {
      return {
         tableData: [],
         heroData: [],
         currentPage: 1,
         size:0,
         cur_pagesize: 5,
         cur_tableData: [],
         cur_pagesizef : 5,
      }
    },
    methods: {
      filterWin(value, row) {
        return row.Result === value;
      },
      handleSizeChange(val) {
        var start =(this.cur_pagesizef-1) * val;
        var end = this.cur_pagesizef * val;
        alert(this.cur_pagesizef)
        this.cur_tableData = this.tableData.slice(start,end);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        var start =(val-1) * this.cur_pagesize;
        var end = val * this.cur_pagesize;
        this.cur_tableData = this.tableData.slice(start,end);
        this.cur_pagesizef = val
        console.log(`当前页: ${val}`);
      },
      openDetails(row, event, column){
        var matchid = row.match_id;
        fetchMatcheinfo(matchid).then(response=>{
          this.$store.state.MatchInfo = response.data;
          this.$router.push({path:'/detail'})
        })
      }
    },
  }
</script>
<style>
.hero{
    height: 30px;;
}
.el-table th{
        background:#060713; /*表头颜色*/
        font-size: 12px;

        text-align: center
    }
.el-table td{
        background:#252525; /*颜色*/
        font-size: 12px;
        height:5px;
        text-align: center
    }

</style>