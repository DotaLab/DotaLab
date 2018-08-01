<template>
    <div id='HomePage'>
        请输入你的用户ID:
        <input v-model="user_id" placeholder="编辑我……"/>
        <button @click="gotoUserPage">跳转</button>
    </div>
</template>

<script>
import {fetchHeroImg} from '@/api/hero'
import axios from 'axios';
export default {
    data(){
        return {
            user_id : '',
        }
    },
    methods: {
        gotoUserPage(){
            // this.$router.psuh({path:'/User/Overview',query: {name: user_id}});
            axios.get("/static/data/heroes.json").then(response =>{
                this.$store.state.HeroImg = response.data;
            })
            this.$router.push({path:'/User/Overview'});

        }
    },
    watch:{
        user_id:function (val, oldVal) {
            this.$store.state.UserId = val;
        }
    }
}
</script>

<style scoped>

</style>
