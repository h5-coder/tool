<template>
    <div class="com-container">
        <div class="form-box" :style="{background:color}">
            <el-form
                class="form"
                @submit.native.prevent
                ref="form"
                :model="form"
                label-width="90px"
            >
                <el-form-item label="红R(0~255)">
                    <el-input v-model="form.r"></el-input>
                </el-form-item>
                <el-form-item label="绿G(0~255)">
                    <el-input v-model="form.g"></el-input>
                </el-form-item>
                <el-form-item label="蓝B(0~255)">
                    <el-input v-model="form.b"></el-input>
                </el-form-item>
            </el-form>
            <el-form
                class="form"
                @submit.native.prevent
                ref="form"
                :model="form"
                label-width="90px"
            >
                <el-form-item label="16进制">
                    <el-input v-model="form.hex"></el-input>
                </el-form-item>
                <el-form-item label="RGB">
                    <el-input v-model="form.rgb"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <pre>
            color:
            background:rgb()
        </pre>
    </div>
</template>

<script>
import comHeader from "@/components/header/";

export default {
    //组件名
    name: "root",
    //实例的数据对象
    data() {
        return {
            form: {
                r: "",
                g: "",
                b: "",
                hex: "#",
                rgb: ""
            },
            color:'#fff'
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        hex2Rgb(hex) {
            //十六进制转为RGB
            let rgb = []; // 定义rgb数组
            if (/^\#[0-9A-F]{3}$/i.test(hex)) {
                //判断传入是否为#三位十六进制数
                let sixHex = "#";
                hex.replace(/[0-9A-F]/gi, function(kw) {
                    sixHex += kw + kw; //把三位16进制数转化为六位
                });
                hex = sixHex; //保存回hex
            }
            if (/^#[0-9A-F]{6}$/i.test(hex)) {
                //判断传入是否为#六位十六进制数
                hex.replace(/[0-9A-F]{2}/gi, function(kw) {
                    rgb.push(eval("0x" + kw)); //十六进制转化为十进制并存如数组
                });
                return `rgb(${rgb.join(",")})`; //输出RGB格式颜色
            } else {
                console.log(`Input ${hex} is wrong!`);
                return "rgb(0,0,0)";
            }
        },
        rgb2Hex(rgb) {
            if (/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(rgb)) {
                //test RGB
                let hex = "#"; //定义十六进制颜色变量
                rgb.replace(/\d{1,3}/g, function(kw) {
                    //提取rgb数字
                    kw = parseInt(kw).toString(16); //转为十六进制
                    kw = kw.length < 2 ? 0 + kw : kw; //判断位数，保证两位
                    hex += kw; //拼接
                });
                return hex; //返回十六进制
            } else {
                console.log(`Input ${rgb} is wrong!`);
                return "#000"; //输入格式错误,返回#000
            }
        }
    },
    //生命周期函数 请求写在created中
    created() {},
    beforeMount() {},
    mounted() {},
    //组件
    components: {
        comHeader
    },
    //监视
    watch: {},
    //过滤器
    filters: {},
    //自定义指令
    directive: {}
};
</script>

<style lang="less">
.form-box {
    display: flex;
    justify-content: space-around;
}
.form {
    width: 300px;
}
</style>
