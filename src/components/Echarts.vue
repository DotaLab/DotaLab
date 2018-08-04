<template>
<div :id="id" :class="className"></div>
</template>

<script>
export default {
    props: ['options','id','className'],
    mounted(){
        var timer = new Date()
        console.log("开始绘制:" + this.id)
        let myChart = this.$echarts.init(document.getElementById(this.id));
        myChart.setOption(this.options);
    },
    methods:{
    }
}
</script>
