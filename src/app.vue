<template>
    <div>
        <com-header></com-header>
        <router-view></router-view>
        <com-footer></com-footer>
    </div>
</template>

<script>
import comHeader from '@/components/header/'
import comFooter from '@/components/footer/'

export default {
    //组件名
    name: 'root',
    //实例的数据对象
    data() {
        return {

        }
    },
    //数组或对象，用于接收来自父组件的数据
    props: {

    },
    //计算
    computed: {

    },
    //方法
    methods: {

    },
    //生命周期函数 请求写在created中
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    //组件
    components: {
        comHeader,comFooter
    },
    //监视
    watch: {

    },
    //过滤器
    filters:{

    },
    //自定义指令
    directive:{

    }
}

</script>

<style lang="less">
html,body{
    background: #f6f6f6;
}
</style>
