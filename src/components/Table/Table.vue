<template>
  <el-table
    :data="tableData" 
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
</template>

<script>
import {formatSeconds} from '@/utils/tool'
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

            this.tableData[i].Img = this.$store.state.HeroImg[this.tableData[i].hero_id].img;
            
            this.tableData[i].Heroname = this.$store.state.HeroImg[this.tableData[i].hero_id].name;
            
            this.tableData[i].Heroname = this.$store.state.HeroImg[this.tableData[i].hero_id].name;

            if(this.tableData[i].deaths == 0 ){
                this.tableData[i].KDA = (this.tableData[i].kills + this.tableData[i].assists) / 1
            }else{
                this.tableData[i].KDA = ((this.tableData[i].kills + this.tableData[i].assists) / this.tableData[i].deaths).toFixed(2)
            }
        }

        this.heroData = this.$store.state.HeroImg;
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