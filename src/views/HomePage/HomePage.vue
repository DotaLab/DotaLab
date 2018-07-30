<template>
    <div id='HomePage'>
        <p>请输入你的用户ID:</p>
        <input v-model="user_id" placeholder="编辑我……"/>
        <br/>
        <router-link :to="{path:'/User/Overview',query: {name: user_id}}" >登陆</router-link>
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
    },
}
</script>

<style>

</style>
