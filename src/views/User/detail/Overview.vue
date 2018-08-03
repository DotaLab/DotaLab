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
      prop="level"
      label="等级"
      width="30"
      filter-placement="bottom-end">

      
    </el-table-column>
     <el-table-column
      prop="kills"
      label="击杀数"
      sortable
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="deaths"
      label="阵亡数"
      sortable
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="assists"
      label="助攻数"
      sortable
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="gold_per_min"
      sortable
      label="GPM"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="xp_per_min"
      sortable
      label="XPM"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="last_hits"
      sortable
      label="正补"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="denies"
      sortable
      label="反补"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="hero_damage"
      sortable
      label="英雄伤害"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="hero_healing"
      sortable
      label="英雄治疗"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="tower_damage"
      sortable
      label="防御塔伤害"
      width="50"
      >
    </el-table-column>
     <el-table-column
      prop="total_gold"
      sortable
      label="经济"
      width="50"
      >
    </el-table-column>
    <el-table-column
      prop="item_0"
      label="物品"
      width="50">
      <template slot-scope="scope">
       <div>
           <p> {{ scope.row.item_0 }}</p>
        </div>
      </template>
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
        prop="level"
        label="等级"
        width="30"
        filter-placement="bottom-end">

        
      </el-table-column>
      <el-table-column
        prop="kills"
        label="击杀数"
        sortable
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="deaths"
        label="阵亡数"
        sortable
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="assists"
        label="助攻数"
        sortable
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="gold_per_min"
        sortable
        label="GPM"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="xp_per_min"
        sortable
        label="XPM"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="last_hits"
        sortable
        label="正补"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="denies"
        sortable
        label="反补"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="hero_damage"
        sortable
        label="英雄伤害"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="hero_healing"
        sortable
        label="英雄治疗"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="tower_damage"
        sortable
        label="防御塔伤害"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="total_gold"
        sortable
        label="经济"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="item_0"
        label="物品"
        width="50">
        <template slot-scope="scope">
        <div>
            <p> {{ scope.row.item_0 }}</p>
          </div>
        </template>
      </el-table-column>
  </el-table>

 <!-- 技能 -->
  <el-table :data="DiretAbl" style="width: 100%">
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
               {{DiretAbl[scope.$index][key]}}
              </div>
          </span>
        </template>
    </el-table-column>
  </el-table>

   <!-- 技能 -->
  <el-table :data="RadiantAbl" style="width: 100%">
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
               {{RadiantAbl[scope.$index][key]}}
              </div>
          </span>
        </template>
    </el-table-column>
  </el-table>






</div>

</template>

<script>
  export default {
    created(){
        
        var playerinfo = this.$store.state.MatchInfo.players
        var flag1 = 0;var flag2 = 0;
        
        for(var i=0;i<10;i++){
            if(playerinfo[i].isRadiant == true){
                this.Radiantplayer[flag1] = playerinfo[i]
                this.RadiantAbl[flag1] =  playerinfo[i].ability_upgrades_arr
                
                flag1 = flag1 + 1; 
            }else{
               this.Direplayer[flag2] = playerinfo[i]

               this.DiretAbl[flag2] = playerinfo[i].ability_upgrades_arr
                flag2 = flag2 + 1; 
            }
        }
        for(var i=0;i<25;i++){
          this.header[i] = ""+i;
        }
        
    },
    
    data() {
      return {
        Radiantplayer: [],
        Direplayer: [],
        header:[],
        RadiantAbl:[],
        DiretAbl:[]
        
      }
    },
    methods: {
        filterWin(value, row) {
        return row.Result === value;
      },
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