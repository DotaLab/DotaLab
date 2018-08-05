<template>
<div :id="id" :class="className" style="width:100%;height:100%"></div>
</template>

<script>
export default {
    props: ['options','id','className'],
    mounted(){
        var timer = new Date()
        console.log("开始绘制:" + this.id)
        let myChart = this.$echarts.init(document.getElementById(this.id),'dark');
        myChart.setOption(this.options);
        console.log("完成绘制:" + this.id)
    },
    methods:{
    }
}
</script>
