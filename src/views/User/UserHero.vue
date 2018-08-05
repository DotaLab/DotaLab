<template>
    <div>
        <el-table 
            v-if ="show"
            :data="heroinfo" 
            highlight-current-row
            style="width: 100%;padding=0px">
            <el-table-column
            label="英雄"
            width="240" 
            >
            <template slot-scope="scope">
                <span class="hero">

                    <div class="pic" style="float:left">
                    <img :src='scope.row.Img' style="width:50px;height:30px">
                    </div>
                <div class="name" style="vertical-align:middle;height:35px;display:table-cell;color:#888888">
                    {{scope.row.name}}
                    </div>
                </span>     
            </template>
            </el-table-column>
            <el-table-column
            prop="score"
            sortable
            label="得分"
            width="200"
            >
            </el-table-column>
            <el-table-column
            prop="percent_rank"
            label="英雄排名"
            width="200">
            <template slot-scope="scope">
            <div>
                <p> {{ scope.row.card }}</p>
                    <div style=" height:2px; background-color: rgb(102, 187, 106);" :style="'width:' + scope.row.percent_rank.toFixed(2) * 100 +'%;'"> &nbsp; </div>
                </div>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
import {fetchHeroRank} from '@/api/user.js'
export default {
    data () {
        return {
            heroinfo:[],
            show:false
        }
    },
    created(){
        var userid = this.$store.state.UserId
        fetchHeroRank(userid).then(response=>{
            this.heroinfo = response.data;
            for (let i = 0; i < this.heroinfo.length; i++) {
                this.heroinfo[i].Img = 'https://api.opendota.com' + this.$store.state.HeroInfo[this.heroinfo[i].hero_id].img;
                this.heroinfo[i].name = this.$store.state.HeroInfo[this.heroinfo[i].hero_id].localized_name;
                this.show = true
            }

        })
    }
}
</script>

<style>

</style>
