<template>
     <div>
        <el-table 
            v-if ="show"
            :data="heroRankInfo" 
            highlight-current-row
            style="width: 100%;padding=0px">
             <el-table-column
            prop="rank"
            sortable
            label="排名"
            width="200"
            >
            </el-table-column>
            <el-table-column
            label="用户ID"
            width="240" 
            >
            <template slot-scope="scope">
                <span class="hero">
                    <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                        {{scope.row.account_id}}
                    </div>
                </span>     
            </template>
            </el-table-column>
            <el-table-column
            prop="games_played"
            sortable
            label="游戏局数"
            width="200"
            >
            </el-table-column>
            <el-table-column
            label="英雄胜场"
            width="200">
            <template slot-scope="scope">
            <div>
                <p> {{ scope.row.wins }}</p>
                    <!-- <div style=" height:2px; background-color: rgb(102, 187, 106);" :style="'width:' + scope.row.percent_rank.toFixed(2) * 100 +'%;'"> &nbsp; </div> -->
                </div>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {fetchHeroPlayers} from '@/api/hero.js'
import {fetchUser} from '@/api/user.js'
export default {
    data () {
        return {
            heroRankInfo:[],
            show:false
        }
    },
    created(){

        fetchHeroPlayers(this.$store.state.cur_hero).then(response=>{
            this.heroRankInfo = response.data; 
            for (let i = 0; i < this.heroRankInfo.length; i++) {
                this.heroRankInfo[i].rank = i + 1;
            }
            this.show = true
            
        })
        
        
    }

}
</script>

<style>

</style>
