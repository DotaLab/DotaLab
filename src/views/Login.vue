<template>
  <div class="loginback">
      <router-view></router-view>
  </div>

</template>

<script>
  export default {
    data () {

    }
  }
</script>

<style scoped>
  .loginback{
    background: url("../assets/LoginBack.jpg") no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
  }

  .newbottun{
    color: #909399;
    background-color: rgba(235, 238, 245, 0.5);
    border-color: #909399;
  }

</style>
