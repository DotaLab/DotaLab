<template>
  <el-table
    :data="tableData" 
    highlight-current-row
    style="width: 100%; padding=0px">
    <el-table-column
      label="玩家名称"
      width="150" 
      >
      <template slot-scope="scope">
        <div class="friend">
            <div class="pic" style="float:left"><img :src='scope.row.avatar' ></div>
            <div class="name" style="overflow: hidden">
                <div >{{scope.row.personaname}}</div>
                <div>{{scope.row.last_time}}</div>
            </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="with_games"
      sortable
      label="次数"
      width="85"
      >
    </el-table-column>
     <el-table-column
      prop="with_win"
      label="己方胜场"
      width="101"
      sortable
      >
     </el-table-column>
  </el-table>
</template>

<script>
import {formatSeconds} from '@/utils/tool'
import {fromnowadays} from '@/utils/tool'
  export default {
    created(){
        
        var shows = 5;
        for(var i=0;i<shows;i++){
             this.tableData[i] = this.$store.state.UserPeerser[i];
        }
        for(var i=0;i<shows;i++){
             this.tableData[i].last_time = fromnowadays(this.$store.state.UserPeerser[i].last_played);
        }

    },
    data() {
      return {
        tableData: [],
      }
    },
    methods: {

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
<style>
.friend{
  width: 150px;
    height: 30px;;
}
.friend.pic{
  display: inline;

}
.friend.name{
  display: inline;

}
</style>
