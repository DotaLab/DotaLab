<template>
    <div>

        
        <el-table
            :data="Direplayer" 
            highlight-current-row
            style="width: 100%;padding=0px">
            <el-table-column
            label="玩家"
            width="100" 
            >
            <template slot-scope="scope">
                <span class="hero">

                    <div class="pic" style="float:left">
                    <!-- <img :src='scope.row.Img' style="width:50px;height:30px"> -->
                    {{scope.row.account_id}}
                    </div>
                <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                    {{scope.row.personaname}}
                    </div>

                </span>

                
            </template>
            </el-table-column>

            <el-table-column
            prop="hero_kills"
            label="英雄"
            width="50"
            filter-placement="bottom-end">

            
            </el-table-column>
            <el-table-column
            prop="lane_kills"
            label="小兵"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="neutral_kills"
            label="中立生物"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="ancient_kills"
            label="远古生物"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="tower_kills"
            sortable
            label="防御塔"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="courier_kills"
            sortable
            label="信使"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="roshan_kills"
            sortable
            label="肉山"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="observer_kills"
            sortable
            label="假眼"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="necronomicon_kills"
            sortable
            label="死灵书"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="abandons"
            sortable
            label="其他"
            width="50"
            >
            </el-table-column>
        </el-table>   

        <el-table
            :data="Radiantplayer" 
            highlight-current-row
            style="width: 100%;padding=0px">
            <el-table-column
            label="玩家"
            width="100" 
            >
            <template slot-scope="scope">
                <span class="hero">

                    <div class="pic" style="float:left">
                    <!-- <img :src='scope.row.Img' style="width:50px;height:30px"> -->
                    {{scope.row.account_id}}
                    </div>
                <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                    {{scope.row.personaname}}
                    </div>

                </span>

                
            </template>
            </el-table-column>

            <el-table-column
            prop="hero_kills"
            label="英雄"
            width="50"
            filter-placement="bottom-end">

            
            </el-table-column>
            <el-table-column
            prop="lane_kills"
            label="小兵"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="neutral_kills"
            label="中立生物"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="ancient_kills"
            label="远古生物"
            sortable
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="tower_kills"
            sortable
            label="防御塔"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="courier_kills"
            sortable
            label="信使"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="roshan_kills"
            sortable
            label="肉山"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="observer_kills"
            sortable
            label="假眼"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="necronomicon_kills"
            sortable
            label="死灵书"
            width="50"
            >
            </el-table-column>
            <el-table-column
            prop="abandons"
            sortable
            label="其他"
            width="50"
            >
            </el-table-column>
        </el-table>   

          <!-- 每分钟变化 -->
        <el-table 
          :data="Diremin" style="width: 100%">
            <el-table-column
            label="玩家"
            width="100" 
            >
            <template slot-scope="scope">
                <span class="hero">
                    <div class="pic" style="float:left">
                    <!-- <img :src='scope.row.Img' style="width:50px;height:30px"> -->
                    {{Direplayer.account_id}}
                    </div>
                <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                    {{Direplayer.personaname}}
                    </div>
                </span>
            </template>
            </el-table-column>
            <el-table-column 
                v-for="(col,key) in header" :key="key"
                :label="col" width=50px >
                <template slot-scope="scope">
                        <span class="hero">
                        <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                        {{Diremin[scope.$index][key]}}
                        </div>
                    </span>
                </template>
            </el-table-column>
        </el-table>

        <el-table 
          :data="Radiantmin" style="width: 100%">
            <el-table-column
            label="玩家"
            width="100" 
            >
            <template slot-scope="scope">
                <span class="hero">
                    <div class="pic" style="float:left">
                    <!-- <img :src='scope.row.Img' style="width:50px;height:30px"> -->
                    {{Radiantplayer.account_id}}
                    </div>
                <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                    {{Radiantplayer.personaname}}
                    </div>
                </span>
            </template>
            </el-table-column>
            <el-table-column 
                v-for="(col,key) in header" :key="key"
                :label="col" width=50px >
                <template slot-scope="scope">
                        <span class="hero">
                        <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                        {{Radiantmin[scope.$index][key]}}
                        </div>
                    </span>
                </template>
            </el-table-column>
        </el-table>

        

        <!-- 经济来源 -->
        <Echarts id='Gold_reasons' :options='options[1]' class="goldreasons" :style="{width: '1200px', height: '300px'}"></Echarts>

        <!-- 经验来源 -->
        <Echarts id='XP_reasons' :options='options[0]' class="xpreasons" :style="{width: '1200px', height: '300px'}"></Echarts>


         
    </div>
</template>

<script>
import Echarts from '@/components/Echarts'
import { drawXPBar } from '@/utils/draw'
import { drawGoldBar } from '@/utils/draw'
export default {
    created(){
      var playerinfo = this.$store.state.MatchInfo.players
      var flag1 = 0;var flag2 = 0;
      for(var i=0;i<10;i++){
          this.XPBardata.push(playerinfo[i].xp_reasons);
          this.GoldBardata.push(playerinfo[i].gold_reasons);
          this.Heroname.push(playerinfo[i].hero_id);
          if(playerinfo[i].isRadiant == true){
              this.Radiantplayer[flag1] = playerinfo[i]
              this.RadiantXPreason[flag1] = playerinfo[i].xp_reasons
              flag1 = flag1 + 1; 
          }else{
              this.Direplayer[flag2] = playerinfo[i]
              this.DireXPreason[flag1] = playerinfo[i].xp_reasons
              flag2 = flag2 + 1; 
          }
      }
      var time_len = parseInt(((playerinfo[0].lh_t.length) -1)/5);

      for(var i=0;i<5;i++){
          this.Radiantmin[i] = new Array(time_len);
          this.Diremin[i] = new Array(time_len);
          this.RadiantXPreason[i] = new Array(4);
          this.DireXPreason[i] = new Array(4);
      }

      for(var i=1;i<=time_len;i++){
          this.header[i-1] = ""+i * 5+"'";
          flag1 = 0;flag2 = 0;
          for(var j=0;j<10;j++){
              if(playerinfo[j].isRadiant == true){
                  this.Radiantmin[flag1][i-1] = playerinfo[j].lh_t[i*5];
                  flag1++;
              }else{
                  this.Diremin[flag2][i-1] = playerinfo[j].lh_t[i*5];
                  flag2++;
              } 
          }
          
      }
      this.options.push(drawXPBar(this.Heroname,this.XPBardata));
      this.options.push( drawGoldBar(this.Heroname,this.GoldBardata));
      

    },
    components:{
        Echarts,
    },
    data() {
      return {
        Heroname:[],
        Radiantplayer: [],
        Direplayer: [],
        header:[],
        Radiantmin:[],
        Diremin: [],
        RadiantXPreason:[],
        DireXPreason:[],
        RadiantGoldreason:[],
        DireGoldreason:[],
        XPBardata:[],
        GoldBardata:[],
        options:[],
      }
    },
     mounted() {
        
     }

}
</script>

<style>

</style>
