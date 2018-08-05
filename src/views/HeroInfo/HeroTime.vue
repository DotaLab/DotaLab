<template>
    <div>
         <echarts id="Bar" :options='option' class="echarts" v-if="show" style="width:1200px; height:300px"></echarts>
    </div>
</template>

<script>
import {fetchHeroDurations} from '@/api/hero.js'
import echarts from '@/components/Echarts'
import {drawColorBar} from '@/utils/draw.js'
export default {
    components:{
        echarts
    },
    data () {
        return {
            heroInfo:[],
            data:[],
            time:[],
            show:false,
            option:[]
        }
    },
    created(){

        fetchHeroDurations(this.$store.state.cur_hero).then(response=>{
            this.heroInfo = response.data; 
            for (let i = 0; i < this.heroInfo.length; i++) {
                this.data[i] = (this.heroInfo[i].wins/this.heroInfo[i].games_played).toFixed(2)
                this.time[i] = this.heroInfo[i].duration_bin / 60 + ":00"
            }
            console.log(this.data)
            this.option = drawColorBar(this.time,this.data);
            this.show = true
            console.log(this.show)
           
            
        })
        
        
    }

}
</script>

<style>

</style>
