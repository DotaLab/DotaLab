<template>
  <el-table
    :data="tableData" 
    highlight-current-row
    @row-click="openDetails"
    style="width: 100%;padding=0px">
    <el-table-column
      prop="match_id"
      label="使用英雄"
      width="156" 
      >
      <template slot-scope="scope">
          <span class="hero">

            <div class="pic" style="float:left">
              <img :src='scope.row.Img' style="width:50px;height:30px">
              </div>
          <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
            {{scope.row.Heroname}}
            </div>

        </span>

        
      </template>
    </el-table-column>

    <el-table-column
      prop="Result"
      label="比赛结果"
      width="80"
      :filters="[{ text: '胜利', value: '胜利' }, { text: '败北', value: '败北' }]"
      :filter-method="filterWin"
      filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.Result === '胜利' ? 'success' : 'danger'"
          disable-transitions>{{scope.row.Result}}</el-tag>
    </template>

      
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
      width="120">
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
</template>

<script>
import {formatSeconds} from '@/utils/tool'
import {fetchMatcheinfo} from '@/api/match'
  export default {
    created(){
        this.tableData = this.$store.state.UserRecentMacth;
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

            this.tableData[i].Img = 'https://api.opendota.com' + this.$store.state.HeroInfo[this.tableData[i].hero_id].img;
            
            this.tableData[i].Heroname = this.$store.state.HeroInfo[this.tableData[i].hero_id].localized_name;
            

            if(this.tableData[i].deaths == 0 ){
                this.tableData[i].KDA = (this.tableData[i].kills + this.tableData[i].assists) / 1
            }else{
                this.tableData[i].KDA = ((this.tableData[i].kills + this.tableData[i].assists) / this.tableData[i].deaths).toFixed(2)
            }
        }
    },
    data() {
      return {
        tableData: [],
        heroData: [],
      }
    },
    methods: {
        filterWin(value, row) {
        return row.Result === value;
      },
      openDetails(row, event, column){
        var matchid = row.match_id;
        fetchMatcheinfo(matchid).then(response=>{
          this.$store.state.MatchInfo = response.data;
          this.$router.push({path:'/detail'})
        })
      }

    //   formatter(row, column) {
    //     return row.address;
    //   },
    //   filterTag(value, row) {
    //     return row.tag === value;
    //   },
    //   filterHandler(value, row, column) {
    //     const property = column['property'];
    //     return row[property] === value;
    //   }
    }
  }
</script>
<style scoped>
.hero{
  width: 100px;
    height: 30px;;
}
.hero.pic{
  display: inline;

}
.hero.name{
  display: inline;
}
</style>