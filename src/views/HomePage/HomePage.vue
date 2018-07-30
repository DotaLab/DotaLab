<template>
    <div id='HomePage'>
        <p>请输入你的用户ID:</p>
        <input v-model="user_id" placeholder="编辑我……"/>
        <br/>
        <button @click="gotoUserPage">跳转</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_id : '',
        }
    },
    methods: {
        gotoUserPage(){
            // this.$router.psuh({path:'/User/Overview',query: {name: user_id}});
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

<style>

</style>
