<template>
    <div>
        <el-table 
            v-if ="show"
            :data="heroinfo" 
            highlight-current-row
            style="width: 100%;padding=0px">
            <el-table-column
                label="使用英雄"
                width="156" 
                >
                <template slot-scope="scope">
                    <span class="hero">
                        <div class="pic" style="float:left">
                        <img :src='scope.row.Icon' style="width:50px;height:50px">
                        </div>
                    <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                        {{scope.row.Name}}
                        </div>

                    </span>

                    
                </template>
                </el-table-column>
             <el-table-column
            prop="games_played"
            sortable
            label="共同游戏场次"
            width="200"
            >
            </el-table-column>
            <el-table-column
            prop="wins"
            sortable
            label="胜利局数"
            width="200"
            >
            </el-table-column>
             <el-table-column
            prop="X"
            sortable
            label="克制系数"
            width="200"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {fetchHeroMatchupss} from '@/api/hero.js'
export default {
    data () {
        return {
            heroinfo:[],
            items:[],
            show:false,
        }
    },
    created(){
        this.items = this.$store.state.HeroInfo;
        fetchHeroMatchupss(this.$store.state.cur_hero).then(response=>{
            this.heroinfo = response.data; 
            for (let i = 0; i < this.heroinfo.length/2  ; i++) {
                this.heroinfo[i].rank = i + 1;
                this.heroinfo[i].Icon = 'https://api.opendota.com' + this.items[this.heroinfo[i].hero_id].icon;  
                this.heroinfo[i].Name = this.items[this.heroinfo[i].hero_id].localized_name;
                this.heroinfo[i].X = (this.heroinfo[i].wins/this.heroinfo[i].games_played).toFixed(2)
            }
            this.show = true
           
        })
       
       

    }

}
</script>

<style>

</style>
