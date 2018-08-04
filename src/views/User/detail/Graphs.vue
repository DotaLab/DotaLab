<template>
    <div>
        <!-- 团队经济经验变化 -->
        <echarts id='xp_gold_gaph' :options='options[0]' :style="{width: '1200px', height: '400px'}" ></echarts>
        <!-- 个人竞技变化情况 -->
        <echarts id='person_gold' :options='options[1]' :style="{width: '1200px', height: '400px'}" ></echarts>

        <echarts id='person_xp' :options='options[2]' :style="{width: '1200px', height: '400px'}" ></echarts>
        
    </div>
</template>

<script>
import Echarts from '@/components/Echarts'
import {drawMinTeam} from '@/utils/draw'
import {drawGoldMin} from '@/utils/draw'
import {drawXPMin} from '@/utils/draw'
export default {

    created(){
      var xp_data = this.$store.state.MatchInfo.radiant_xp_adv
      var gold_data = this.$store.state.MatchInfo.radiant_gold_adv
      var playersinfo = this.$store.state.MatchInfo.players
      var person_gold = []
      var person_xp = []
      var person_hero = []
      var data = [];
      data.push(gold_data);
      data.push(xp_data);
      var time = []
      for (let index = 0; index < xp_data.length; index++) {
          time[index] = ""+index + ":00";
      }
      for (let index = 0; index < 10; index++) {
          person_gold[index] = playersinfo[index].gold_t;
          person_xp[index] = playersinfo[index].xp_t;
          person_hero[index] = playersinfo[index].hero_id;
      }
      this.options.push(drawMinTeam(data,time));
      this.options.push(drawGoldMin(person_gold,time,person_hero))
      this.options.push(drawXPMin(person_xp,time,person_hero))
    },
    components:{
        Echarts
    },
    data () {
        return {
            options:[]
        }
    }

}
</script>

<style>

</style>
