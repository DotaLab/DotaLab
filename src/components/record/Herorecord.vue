<template>
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
</template>

<script>
export default {
    created(){
        // this.$store.state.

    },
    data () {
        return {
            Heroinfo:[]
        }
    },
    watch(){

    }

}
</script>

<style>

</style>
